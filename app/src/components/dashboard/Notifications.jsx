import React, { Component } from 'react';
import './Notifications.scss';

import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="notificationWrapper">
      <p className="notificationsTitle">Notifications</p>
      <div className="notificationsList">
        {notifications && notifications.map(item => {
          return (
            <div className="notificationItem" key={item.id}>
              <div className="notificationContent">
                <div className="user">{item.user}</div>
                <div className="content">{item.content}</div>
              </div>
              
              <div className="time">{ moment(item.time.toDate()).fromNow() }</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};


export default Notifications;