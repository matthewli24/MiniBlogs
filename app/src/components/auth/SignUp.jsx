import React, { Component } from 'react';
import './SignUp.scss';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    usernameActive: false,
    emailActive: false,
    passwordActive: false
  }

  handleOnFocus = (e) => {
    const activeLabel = `${e.target.id}Active`;
    if (this.state.hasOwnProperty(activeLabel)) {
      this.setState({
        [activeLabel]: true
      })
    }
  };

  handleOnBlur = (e) => {
    const activeLabel = `${e.target.id}Active`;
    if (this.state.hasOwnProperty(activeLabel) && e.target.value === "") {
      this.setState({
        [activeLabel]: false
      })
    }
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: this.state.username, 
      email: this.state.email, 
      password: this.state.password
    };
    this.props.signUp(newUser);
  };

  render() {
    const usernameLabelClass = this.state.usernameActive ? "signUpLabel-active" : "signUpLabel"
    const emailLabelClass = this.state.emailActive ? "signUpLabel-active" : "signUpLabel"
    const passwordLabelClass = this.state.passwordActive ? "signUpLabel-active" : "signUpLabel"

    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="SignUpWrapper">
        <form className="signUpForm" onSubmit={this.handleOnSubmit}>
          <h1 className="signUpTitle">Sign Up</h1>
          <div className="inputField">
            <label className={usernameLabelClass} htmlFor="username">Username</label>
            <input className="signUpInput" 
                   type="username" 
                   id="username" 
                   onFocus={this.handleOnFocus}
                   onBlur={this.handleOnBlur} 
                   onChange={this.handleOnChange}>
            </input>
          </div>
          <div className="inputField">
            <label className={emailLabelClass} htmlFor="email">Email</label>
            <input className="signUpInput" 
                   type="email" 
                   id="email" 
                   onFocus={this.handleOnFocus}
                   onBlur={this.handleOnBlur} 
                   onChange={this.handleOnChange}>
            </input>
          </div>
          <div className="inputField">
            <label className={passwordLabelClass} htmlFor="password">Password</label>
            <input className="signUpInput" 
                   type="password" 
                   id="password" 
                   onFocus={this.handleOnFocus}
                   onBlur={this.handleOnBlur} 
                   onChange={this.handleOnChange}>
            </input>
          </div>
          <div className="inputField">
            <div className="buttonContainer">
              <button className="registerButton">Register</button>
            </div>
          </div>

          <div className="signUpError">{ authError ? <p>{ authError }</p> : null }</div>

        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);