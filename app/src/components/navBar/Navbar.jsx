import React from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignInLinks profile={profile}/> : <SignedOutLinks/>
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
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
};

export default connect(mapStateToProps)(Navbar);