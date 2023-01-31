import React from 'react';
import logo from '../images/logo-footer.png';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>
        Copyright
        <img src={logo} alt="Little Lemon" />
      </p>
    </footer>
  );
}

export default Footer;
