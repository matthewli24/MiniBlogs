import React, { Component } from 'react';
import './Dashboard.scss';
import Notifications from './Notifications';
import BlogList from '../blogs/BlogList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { blogs } = this.props;
    return (
      <div className="dashboardWrapper">
        <div className="blogListContainer"> <BlogList blogs={blogs}/> </div>
        <div className="notificationsContainer"> <Notifications/> </div>
      </div>
    );
    
  };
}; 

const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs
  }
};

export default connect(mapStateToProps)(Dashboard);

