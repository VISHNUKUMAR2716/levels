import React, { useEffect, useState } from 'react';
import JournalForm from './JournalForm';
import JournalList from './JournalList';
import axios from 'axios';

function App() {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    const res = await axios.get('http://localhost:5000/api/journals');
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div>
      <h1>My Journal</h1>
      <JournalForm onEntryAdded={fetchEntries} />
      <JournalList entries={entries} onEntryUpdated={fetchEntries} onEntryDeleted={fetchEntries} />
    </div>
  );
}

export default App;
