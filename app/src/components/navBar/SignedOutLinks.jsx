import React from 'react';
import './SignedOutLinks.scss'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="signedOutLinksWrapper">
    <li className="linkContainter"><NavLink to='/signup' className="signedOutLink">SignUp</NavLink></li>
    <li className="linkContainter"><NavLink to='/signin' className="signedOutLink">SignIn</NavLink></li>
  </ul>
  );
};

export default SignedOutLinks;