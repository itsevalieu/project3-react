import React, { Component } from 'react';
import NotificationWindow from '../components/notificationWindow.jsx';
import TechWindow from '../components/techWindow.jsx';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
		     HELLO FROM DASHBOARD
		     <div className='col m6'>
		     	<NotificationWindow />
		     	<TechWindow />
		     </div>
      </div>
      );
  }
}
export default Dashboard;