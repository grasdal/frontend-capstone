// components/Footer.js
import React from 'react';
import logo from '../images/logo-footer.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Little Lemon" className="Footer-logo" />
      <p>&copy; Little Lemon</p>
    </footer>
  );
};

export default Footer;