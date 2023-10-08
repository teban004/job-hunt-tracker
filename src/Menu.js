import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const isAuthenticated = true; // Replace with actual authentication status

  return (
    <div className="menu">
      <div className="login-status">
        {isAuthenticated ? (
          <>
            <span>Welcome, John Doe</span>
            <button>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {isAuthenticated && (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/stats">Stats</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Menu;
