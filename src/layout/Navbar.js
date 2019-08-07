import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <a href="#" className="brand-logo">
          FPL Application
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <SignedInLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;