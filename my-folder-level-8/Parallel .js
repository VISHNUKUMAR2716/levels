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

const ParallelRequests = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMultipleData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          api.get("https://jsonplaceholder.typicode.com/posts"),
          api.get("https://jsonplaceholder.typicode.com/users"),
        ]);
        setData1(response1.data);
        setData2(response2.data);
      } catch (err) {
        setError("Failed to fetch data from one or more sources.");
      } finally {
        setLoading(false);
      }
    };
    fetchMultipleData();
  }, []);

  return (
    <div>
      <h2>Parallel API Requests</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div>
          <h3>Posts</h3>
          <pre>{JSON.stringify(data1, null, 2)}</pre>
          <h3>Users</h3>
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ParallelRequests;
