import React from 'react';
import './SignedInLinks.scss'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="signedInLinksWrapper">
      <li><NavLink to='/' className="signedInLink">Create</NavLink></li>
      <li><NavLink to='/' className="signedInLink">SignOut</NavLink></li>
      <li><NavLink to='/' className="signedInLink">Username</NavLink></li>
    </ul>
  );
};

export default SignedInLinks;