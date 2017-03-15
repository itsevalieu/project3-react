import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';
import dashboard from '../components/dashboard';
import Footer from '../components/Footer';


class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
	      <Header />
	      <Footer />
      </div>
      );
  }
}
 
export default Dashboard;