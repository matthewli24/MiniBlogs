import React, { Component } from 'react';
import './SignIn.scss';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
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
    let creds = {email : this.state.email, password: this.state.password};
    this.props.signIn(creds);
  };

  render() {
    const emailLabelClass = this.state.emailActive ? "signInLabel-active" : "signInLabel"
    const passwordLabelClass = this.state.passwordActive ? "signInLabel-active" : "signInLabel"

    // destructuring authError property from props
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    
    return (
      <div className="SignInWrapper">
        <form className="signInForm" onSubmit={this.handleOnSubmit}>
          <h1 className="signInTitle">Sign In</h1>
          <div className="inputField">
            <label className={emailLabelClass} htmlFor="email">Email</label>
            <input className="signInInput" 
                   type="email" 
                   id="email" 
                   onFocus={this.handleOnFocus}
                   onBlur={this.handleOnBlur} 
                   onChange={this.handleOnChange}>
            </input>
          </div>
          <div className="inputField">
            <label className={passwordLabelClass} htmlFor="password">Password</label>
            <input className="signInInput" 
                   type="password" 
                   id="password" 
                   onFocus={this.handleOnFocus}
                   onBlur={this.handleOnBlur} 
                   onChange={this.handleOnChange}>
            </input>
          </div>
          <div className="inputField">
            <div className="buttonContainer">
              <button className="signInButton">Sign In</button>
            </div>
          </div>

          <div className="signInError">{ authError ? <p>{ authError }</p> : null }</div>

        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);