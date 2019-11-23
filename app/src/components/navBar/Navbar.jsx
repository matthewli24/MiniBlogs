import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="navbarWrapper">
      <div className="logoContainer">
        <Link to='/' className='logo'>Mini Blogs</Link>
      </div>
      <div className="linksContainer">
        <SignInLinks/>
        <SignedOutLinks/>
      </div>
    </nav>
  );
};

export default Navbar;