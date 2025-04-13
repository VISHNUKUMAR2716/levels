import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

const App = () => {
  const [newFeedUrl, setNewFeedUrl] = useState('');

  const addFeed = async () => {
    if (!newFeedUrl) return; // 

    try {
      // Send the new feed URL to the backend
      await axios.post(`${API_BASE}/feeds`, { url: newFeedUrl });

      setNewFeedUrl(''); // Clear the input field after adding
      alert('Feed added! Articles will appear shortly.');
    } catch (err) {
      alert('Failed to add feed. It might already exist.');
    }
  };

  return (
    <div className="container">
      <h1>RSS Feed Reader</h1>

      {/* Input field and button to add new feed */}
      <div className="add-feed">
        <input
          type="text"
          placeholder="Paste RSS feed URL here..."
          value={newFeedUrl}
          onChange={(e) => setNewFeedUrl(e.target.value)}
        />
        <button onClick={addFeed}>Add Feed</button>
      </div>

      {/* Other UI elements go here... */}
    </div>
  );
};

export default App;
