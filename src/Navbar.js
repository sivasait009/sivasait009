import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.svg'; // Update this path to the correct location

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Company Logo" className="logo" />
        <h2 className="navbar-brand">SREE KRISHNA ENGINEERS AND CONSULTANCY</h2>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
