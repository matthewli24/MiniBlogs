import React from 'react';
import './SignedInLinks.scss';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className="signedInLinksWrapper">
      <li><NavLink to='/create' className="signedInLink">Create</NavLink></li>
      <li><a onClick={props.signOut} className="signedInLink">SignOut</a></li>
      <li><NavLink to='/' className="signedInLink">{props.profile.username}</NavLink></li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);