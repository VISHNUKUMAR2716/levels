// PostList.jsx
import React from "react";
import Catch from "./Catch";

const PostList = () => {
  const {
    data :user,
    loading,
    error,
    refresh,
  } = Catch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="container mt-4">
      <h2>📚 Blog Posts</h2>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {user && (
        <ul className="list-group">
          {user.slice(0, 5).map((user) => (
            <li key={user.id} className="list-group-item">
              <strong>{user.title}</strong>
              <p>{user.body}</p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={refresh} className="btn btn-primary mt-3">
        🔄 Refresh Posts
      </button>
    </div>
  );
};

export default PostList;
