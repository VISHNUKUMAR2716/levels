import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import User from './Users';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Setting';
function App() {
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
   </Router>
    </div>
  
  );
}
export default App;
