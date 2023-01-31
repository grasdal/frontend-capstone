import React from 'react';
import logo from '../images/logo.svg';
import Nav from './Nav';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Little Lemon" />
      <Nav />
    </header>
  );
}

export default Header;