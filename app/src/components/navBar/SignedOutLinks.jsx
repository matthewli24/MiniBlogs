import React from 'react';
import './SignedOutLinks.scss'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="signedOutLinksWrapper">
    <li><NavLink to='/' className="signedOutLink">SignUp</NavLink></li>
    <li><NavLink to='/' className="signedOutLink">SignIn</NavLink></li>
  </ul>
  );
};

export default SignedOutLinks;