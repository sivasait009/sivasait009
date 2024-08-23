import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SiteDevelopments from './SiteDevelopments';
import Ventures from './Ventures';
import Interiors from './Interiors';
import Contracts from './Contracts';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SiteDevelopments" element={<SiteDevelopments />} />
          <Route path="/Ventures" element={<Ventures />} />
          <Route path="/Interiors" element={<Interiors />} />
          <Route path="/Contracts" element={<Contracts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


