const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/auth-demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"));

const JWT_SECRET = "your_jwt_secret";
const JWT_REFRESH_SECRET = "your_jwt_refresh_secret";

const transporter = nodemailer.createTransport({
  jsonTransport: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  resetToken: String,
  resetTokenExpires: Date,
});
const User = mongoose.model("User", userSchema);

const generateToken = (user, secret, expiresIn = "15m") =>
  jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn });

const sendTokenResponse = (user, res) => {
  const token = generateToken(user, JWT_SECRET, "15m");
  const refreshToken = generateToken(user, JWT_REFRESH_SECRET, "7d");
  res.json({ token, refreshToken });
};

const protect = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "No token provided" });

  const token = auth.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token invalid" });
    req.user = decoded;
    next();
  });
};

const authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  };

app.post("/api/auth/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 12);
  const user = await User.create({ name, email, password: hashed, role });
  sendTokenResponse(user, res);
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });
  sendTokenResponse(user, res);
});

app.post("/api/auth/refresh", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return res.status(401).json({ message: "No refresh token" });

  jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });
    const newToken = generateToken(decoded, JWT_SECRET, "15m");
    res.json({ token: newToken });
  });
});

app.post("/api/auth/forgot-password", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const token = crypto.randomBytes(20).toString("hex");
  user.resetToken = token;
  user.resetTokenExpires = Date.now() + 3600000;
  await user.save();

  const resetLink = `http://localhost:3000/reset-password/${token}`;
  const message = {
    to: user.email,
    subject: "Password Reset",
    text: `Reset link: ${resetLink}`,
  };
  transporter.sendMail(message, () => {
    console.log("Reset email:", message);
    res.json({ message: "Reset email sent" });
  });
});

app.post("/api/auth/reset-password/:token", async (req, res) => {
  const user = await User.findOne({
    resetToken: req.params.token,
    resetTokenExpires: { $gt: Date.now() },
  });
  if (!user)
    return res.status(400).json({ message: "Token invalid or expired" });

  user.password = await bcrypt.hash(req.body.password, 12);
  user.resetToken = undefined;
  user.resetTokenExpires = undefined;
  await user.save();
  res.json({ message: "Password reset successful" });
});

app.get("/api/user/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

app.get("/api/admin/users", protect, authorize("admin"), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Auth API running on http://localhost:${PORT}`)
);
