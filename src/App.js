import React, { PropTypes, Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

/*
function formatName(routes){
  let path = (routes[routes.length-1] || {}).path || 'Home';
  return path.replace('/', '').toUpperCase() || 'Unknown Page';
}
*/

class App extends Component{
  render() {
    return(
      <div className="Header">
      <Header/>
      <Footer/>
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array
}

export default App;