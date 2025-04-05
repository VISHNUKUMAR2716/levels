import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import User from "./Users";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Setting";
import { AuthProvider } from "./AuthContext";
import Largelist from "./Largelist";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import UseCallbackExample from "./Child";
import UsermemoExample from "./Call";
import Sceach from "./Sceach";
import VirtualList from "./VirtualList";
import ProductList from "./ProductList";
import debounce from "./Utils";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = useCallback(
    debounce((value) => {
      setFilter(value.toLowerCase());
    }, 300),
    []
  );

  const filtered = useMemo(() => {
    return products.filter((p) => p.title.toLowerCase().includes(filter));
  }, [products, filter]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 Optimized Product Dashboard</h1>
      <input
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      <ProductList products={filtered} />

      <Suspense fallback={<div>Loading Details...</div>}>
        {/* Lazy loaded when needed */}
        {/* <ProductDetail /> */}
      </Suspense>
    </div>
  );
};

export default App;
