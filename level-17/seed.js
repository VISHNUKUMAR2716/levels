const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedUsers = [
  { name: 'Arun Kumar', email: 'arun.kumar@tamilmail.com' },
  { name: 'Priya Raj', email: 'priya.raj@tamilmail.com' },
  { name: 'Karthik M', email: 'karthik.m@tamilmail.com' },
  { name: 'Divya S', email: 'divya.s@tamilmail.com' },
  { name: 'Vignesh T', email: 'vignesh.t@tamilmail.com' },
  { name: 'Lakshmi B', email: 'lakshmi.b@tamilmail.com' },
  { name: 'Suresh R', email: 'suresh.r@tamilmail.com' },
  { name: 'Anitha V', email: 'anitha.v@tamilmail.com' },
  { name: 'Manikandan G', email: 'manikandan.g@tamilmail.com' },
  { name: 'Revathi M', email: 'revathi.m@tamilmail.com' },
  { name: 'Senthil K', email: 'senthil.k@tamilmail.com' },
  { name: 'Meena P', email: 'meena.p@tamilmail.com' },
  { name: 'Ravi A', email: 'ravi.a@tamilmail.com' },
  { name: 'Janani V', email: 'janani.v@tamilmail.com' },
  { name: 'Saravanan S', email: 'saravanan.s@tamilmail.com' }
];

User.insertMany(seedUsers)
  .then(() => {
    console.log('✅ Tamil Nadu users seeded successfully!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ Error seeding users:', err);
    mongoose.connection.close();
  });
