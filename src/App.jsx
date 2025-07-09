import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Mare from './mare/Mare';
import Vezbanje from './pages/Vezbanje';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>|
        <Link to="/vezbanje">vezbanje</Link> | <Link to= "/mare">Mare</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vezbanje" element={<Vezbanje />} />
        <Route path="/mare" element={<Mare />} />
      </Routes>
    </Router>
  );
}

export default App;
