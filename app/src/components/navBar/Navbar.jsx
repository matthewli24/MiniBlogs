import React from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignInLinks/> : <SignedOutLinks/>
  return (
    <nav className="navbarWrapper">
      <div className="logoContainer">
        <Link to='/' className='logo'>Mini Blogs</Link>
      </div>
      <div className="linksContainer">
        { auth.isLoaded && links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
};

export default connect(mapStateToProps)(Navbar);