import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import Nav from './Nav';
import './Header.css';

function Header() {
  return (
    <header className="page-header">
      <Link to={'/'}><img src={logo} alt="Little Lemon" /></Link>
      <Nav />
    </header>
  );
}

export default Header;