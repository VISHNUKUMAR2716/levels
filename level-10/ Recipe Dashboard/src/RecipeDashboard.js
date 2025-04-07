import { useState, useEffect } from "react";

const RecipeDashboard = () => {
  const [query, setQuery] = useState("pasta");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_key = "04f57cb9aa484ab4bfa2fa34c10fe269";

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=9&apiKey=${API_key}`
      );
      const data = await res.json();

      if (data.results) {
        setRecipes(data.results);
      } else {
        setRecipes([]);
        setError(data.message || "No results found.");
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
      setRecipes([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🍳 Recipe Dashboard</h1>

      <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control w-50 me-2"
          placeholder="Search for recipes..."
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {!loading && !error && (
        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {recipe.title.length > 40 ? recipe.title.slice(0, 40) + "..." : recipe.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No recipes found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeDashboard;
