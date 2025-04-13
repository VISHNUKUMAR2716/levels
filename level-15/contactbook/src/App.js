import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await axios.get('http://localhost:5000/contacts');
    setContacts(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/contacts/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/contacts', form);
    }
    setForm({ name: '', email: '', phone: '' });
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setForm(contact);
    setEditingId(contact._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div className="container mt-5">
      <h2>Contact Manager</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input name="name" className="form-control mb-2" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" className="form-control mb-2" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="phone" className="form-control mb-2" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <button className="btn btn-primary">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <ul className="list-group">
        {contacts.map((c) => (
          <li key={c._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{c.name}</strong> - {c.email} - {c.phone}
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(c)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
