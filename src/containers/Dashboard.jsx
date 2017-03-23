import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import SideNav from '../components/SideNav.jsx';
import NotificationWindow from '../components/notificationWindow.jsx';
import TechWindow from '../components/techWindow.jsx';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
        <Row>
          <Col s={4}>
            <SideNav />
          </Col>
          <Col s={8}>
		     <Row s={12}>
  		     	<NotificationWindow />
          </Row>
          <Row s={12}>
  		     	<TechWindow />
          </Row>
         </Col>
         </Row>
      </div>
      );
  }
}
export default Dashboard;