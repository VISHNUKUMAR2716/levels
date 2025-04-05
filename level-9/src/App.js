import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import User from './Users';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Setting';
import { AuthProvider } from './AuthContext';
import Largelist from './Largelist';
import { useEffect, useMemo, useState } from 'react';
import UseCallbackExample from './Child';
import UsermemoExample from './Call';
import Sceach from './Sceach';



function App() {

  return(
    <div>
      <Router>
        <Routes>
          <Route path='/search' element={<Sceach />}/>
        </Routes>
      </Router>

    </div>
  )
}
export default App;
