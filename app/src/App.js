import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import Navbar from './components/navBar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import BlogDetails from './components/blogs/BlogDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateBlog from './components/blogs/CreateBlogs'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/blog/:id' component={BlogDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateBlog} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
