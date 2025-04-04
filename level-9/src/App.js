import './App.css';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='row bg-dark p-4'>
          <div className='col'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.mxilfUdStJPeqU4mK_VcYAHaFj&pid=Api&P=0&h=180' id='cars-logo'/>
          </div>

        <nav className='d-flex gap-5 justify-content-end col'>
          <Link to="/" className='text-warning   text-decoration-none'>Home</Link>
          <Link to="/about" className='text-warning   text-decoration-none'>About</Link>
          <Link to="/Contect" className='text-warning   text-decoration-none'>Contect</Link>
        </nav>

        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/Contect' element={<Contect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
