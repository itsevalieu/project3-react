import React, { PropTypes, Component } from 'react';
import './public/assets/css/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AuthFooter from './components/authFooter.jsx';

function getLocation() {
  let location = window.location.href;
  location = location.substring(location.lastIndexOf('/'));
  console.log(location);
  let loggedIn = false;

  if (location !== '/'){
    loggedIn = true;
  } 
  console.log('return value: ' + loggedIn);
  return loggedIn;
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {loggedIn: getLocation()}
  }
  render() {
    console.log(this.state.loggedIn);
    if (this.state.loggedIn === true){
      return(
        <div className="home">
          <Header />
            <div className="container App-content">
            {this.props.children}
            </div>
          <AuthFooter />
        </div>
        );
    }
    else {
      return(
        <div className="home">
          <Header />
          <div className="container App-content">
          {this.props.children}
          </div>
          <Footer />
        </div>
      );
   }
  }
}
App.defaultProps = {
  loggedIn: getLocation()
}
App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array,
};

export default App;