import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './App.css';

const API_URL = 'http://localhost:5000/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchNotes = async () => {
    const res = await axios.get(API_URL);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSave = async () => {
    if (selectedNote) {
      await axios.put(`${API_URL}/${selectedNote._id}`, { title, content });
    } else {
      await axios.post(API_URL, { title, content });
    }
    fetchNotes();
    setTitle('');
    setContent('');
    setSelectedNote(null);
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  return (
    <div className="app">
      <h1>📝 Markdown Notes</h1>

      <div className="editor">
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your markdown here..."
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSave}>
          {selectedNote ? 'Update Note' : 'Add Note'}
        </button>
      </div>

      <div className="preview">
        <h2>📄 Preview</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <div className="notes-list">
        <h2>📚 All Notes</h2>
        {notes.map(note => (
          <div key={note._id} className="note">
            <h3>{note.title}</h3>
            <ReactMarkdown>{note.content.slice(0, 100)}</ReactMarkdown>
            <button onClick={() => handleEdit(note)}>Edit</button>
            <button onClick={() => handleDelete(note._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
