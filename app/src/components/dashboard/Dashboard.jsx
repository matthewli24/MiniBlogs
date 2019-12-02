import React, { Component } from 'react';
import './Dashboard.scss';

import Notifications from './Notifications';
import BlogList from '../blogs/BlogList';

import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
  render() {
    const { blogs, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="dashboardWrapper">
        <div className="blogListContainer"> <BlogList blogs={blogs}/> </div>
        <div className="notificationsContainer"> <Notifications/> </div>
      </div>
    );
    
  };
}; 

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    blogs: state.firestore.ordered.blogs,
    auth: state.firebase.auth 
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs' }
  ])
)(Dashboard);

