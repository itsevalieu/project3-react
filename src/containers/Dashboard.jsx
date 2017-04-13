import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import SideNav from '../components/SideNav';
import NotificationWindow from '../components/notificationWindow.jsx';
import TechWindow from '../components/techWindow.jsx';
import '../../public/assets/css/dashboard.css';

class Dashboard extends Component {
  render() {
    return(
      <main id='dashboard'>
        <div id='sideBar'>
          <SideNav />
        </div>
        <div id='notifications'>
          <NotificationWindow />
        </div>
        <div id='badgeWindow'>
          <TechWindow />
        </div>
      </main>
      );
  }
}
export default Dashboard;