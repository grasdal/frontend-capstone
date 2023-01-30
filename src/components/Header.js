import React from 'react';
import Nav from './Nav';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="Little Lemon" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;