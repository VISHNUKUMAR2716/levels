import React, { useState } from 'react';
import axios from 'axios';

function JournalForm({ onEntryAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/journals', { title, content });
    setTitle('');
    setContent('');
    onEntryAdded();
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center gap-4'>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default JournalForm;
