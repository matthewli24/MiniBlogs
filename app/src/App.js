import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Hello Me</h1>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
