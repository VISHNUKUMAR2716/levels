import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import User from './Users';
function App() {
  return (
    <div>
  <Router>
       <nav>
        <Link to="/user/1">User 1</Link> | 
        <Link to="/user/2">User 2</Link> | 
        <Link to="/user/3">User 3</Link>
        <Routes>
          <Route path='/Users/:id' element={<User />}/>
        </Routes>
      </nav>
  </Router>
      
    </div>
  
  );
}

export default App;
