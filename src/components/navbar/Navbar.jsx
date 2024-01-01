import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <Link to="/" className="logo">Vertebra</Link>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/services">Services</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
        <button><a href="">Get Started</a></button>
      </nav>
    );
  };

export default Navbar