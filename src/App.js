import React, { PropTypes, Component } from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';


class App extends Component{
  render() {
    return(
      <div className="homepage">
      <Homepage />
      {this.props.routes}
      {this.props.children}
      <Footer />
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array
}
 
export default App;