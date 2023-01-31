import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/booking'}>Reservations</Link></li>
        <li><Link to={'/order'}>Order Online</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
