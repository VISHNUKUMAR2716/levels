import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import User from './Users';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Setting';
import { AuthProvider } from './AuthContext';
function App() {
  return (
    <div>
    <AuthProvider>
    <Router>
    <nav>
    <ul>
    <li>
    <Link to="/">Dashboard</Link>
    </li>
    <li>
    <Link to="/users">Users</Link>
    </li>
    <li>
    <Link to="/profile">Profile</Link>
    </li>
    <li>
    <Link to="/settings">Settings</Link>
    </li>
    </ul>
    </nav>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/users" element={<User />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/settings" element={<Settings />} />
    </Routes>
    </Router>
    </AuthProvider>
    </div>
  
  );
}
export default App;
