import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '10px', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Home</Link></li>
        <li><Link to="/profile" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
