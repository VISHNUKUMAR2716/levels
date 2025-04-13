import React, { useState } from 'react';
import axios from 'axios';

function JournalList({ entries, onEntryUpdated, onEntryDeleted }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const startEditing = (entry) => {
    setEditingId(entry._id);
    setEditTitle(entry.title);
    setEditContent(entry.content);
  };

  const saveEdit = async (id) => {
    await axios.put(`http://localhost:5000/api/journals/${id}`, {
      title: editTitle,
      content: editContent
    });
    setEditingId(null);
    onEntryUpdated();
  };

  const deleteEntry = async (id) => {
    await axios.delete(`http://localhost:5000/api/journals/${id}`);
    onEntryDeleted();
  };

  return (
    <div className='container d-flex justify-content-center m-4'>
      {entries.map(entry => (
        <div key={entry._id} className='d-flex justifu-content-center'>
          {editingId === entry._id ? (
            <div className='d-flex justifu-content-center gap-4'>
              <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
              <textarea value={editContent} onChange={e => setEditContent(e.target.value)} />
              <button onClick={() => saveEdit(entry._id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div >
              <h3 className='justify-content-center bg-dark text-warning'>{entry.title}</h3>
              <p>{entry.content}</p>
              <div className=' d-flex justify-content-center gap-3'>
              <button onClick={() => startEditing(entry)}>Edit</button>
              <button onClick={() => deleteEntry(entry._id)}>Delete</button>
                </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default JournalList;
