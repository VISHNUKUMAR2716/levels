import React, { useState, useEffect } from "react";
import axios from "axios";

// Create a global Axios instance with interceptors
const api = axios.create();

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer your-token-here";
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized access - 401");
      } else if (error.response.status === 404) {
        console.error("Resource not found - 404");
      } else if (error.response.status === 500) {
        console.error("Internal Server Error - 500");
      }
    }
    return Promise.reject(error);
  }
);

const ContactAsync = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
      } catch (error) {
        setErrorMessage("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await api.post("https://jsonplaceholder.typicode.com/posts", formData);
      if (response.status === 201) {
        setSuccessMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-centent-center ">
      {loading && <p>Loading...</p>}
      <h2 className="d-flex justify-content-center">Contact Us</h2>
      <form onSubmit={handleSubmit} >
        <div className="mt-5">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <h3>Fetched Data</h3>
      {loading ? <p>Loading...</p> : errorMessage ? <p>{errorMessage}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ContactAsync;
