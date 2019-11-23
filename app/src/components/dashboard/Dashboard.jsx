import React, { Component } from 'react';
import './Dashboard.scss';
import Notifications from './Notifications';
import BlogList from '../blogs/BlogList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardWrapper">
        <div className="blogListContainer"> <BlogList/></div>
        <div className="notificationsContainer"> <Notifications/> </div>
      </div>
    );
    
  };
}; 


export default Dashboard;

