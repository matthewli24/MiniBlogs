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
    const { blogs, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="dashboardWrapper">
        <div className="blogListContainer"> <BlogList blogs={blogs}/> </div>
        <div className="notificationsContainer"> <Notifications notifications={notifications}/> </div>
      </div>
    );
    
  };
}; 

const mapStateToProps = (state) => {
  return {
    blogs: state.firestore.ordered.blogs,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);

