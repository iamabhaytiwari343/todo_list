import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/tasks" className="navbar-link">Tasks</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
