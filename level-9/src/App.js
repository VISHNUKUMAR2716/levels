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



function App() {

  return(
    <div>
   <UseCallbackExample />
   <UsermemoExample />
    </div>
  )
}
export default App;
