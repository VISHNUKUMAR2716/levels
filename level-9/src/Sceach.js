import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await response.json();
        setResults(data.products);
      } catch (error) {
        console.error('Error fetching:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchInput });
  };

  return (
    <div style={{ padding: '20px', backgroundColor:"black", color:"white" }}>
      <h2 className="d-flex justify-content-center bg-dark text-white">🔍 Search Products (with API)</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search something..."
          style={{ padding: '8px', width: '250px', gap:"20px", marginLeft:"650px"}}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Search</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h4>Results for: "{query}"</h4>
        {loading ? (
          <p>Loading...</p>
        ) : results.length > 0 ? (
          <ul style={{textAlign:"center", textDecoration:"none"}}>
            {results.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong> - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          query && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
