import React, { Component } from 'react';
import './SignIn.scss';

class SignIn extends Component {
  state = {

  }

  handleOnChange = (e) => {
    console.log(e);
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className="SignInWrapper">
        <form className="signInForm" onSubmit={this.handleOnSubmit}>
          <h1 className="signInTitle">Sign In</h1>
          <div className="inputField">
            <label className="signInLabel" htmlFor="email">Email</label>
            <input className="signInInput" type="email" id="email" onChange={this.handleOnChange}></input>
          </div>
          <div className="inputField">
            <label className="signInLabel" htmlFor="password">Password</label>
            <input className="signInInput" type="password" id="password" onChange={this.handleOnChange}></input>
          </div>
          <div className="inputField">
            <button className="signInButton">Sign In</button>
          </div>
        </form>
      </div>
    );
  }

}

export default SignIn;