import React, { Component } from 'react';
import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    emailActive: false,
    passwordActive: false
  }

  handleOnFocus = (e) => {
    if (e.target.id === "password"){
      this.setState({
        passwordActive: true
      })
    }
    else if (e.target.id === "email") {
      this.setState({
        emailActive: true
      })
    }
   
  };

  handleOnBlur = (e) => {
    if (e.target.id === "password" && e.target.value === "") {
      this.setState({
        passwordActive: false
      })
    }

    else if (e.target.id === "email" && e.target.value === "") {
      this.setState({
        emailActive: false
      })
    }
  }

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const emailLabelClass = this.state.emailActive ? "signInLabel-active" : "signInLabel"
    const passwordLabelClass = this.state.passwordActive ? "signInLabel-active" : "signInLabel"
    
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
        </form>
      </div>
    );
  }

}

export default SignIn;