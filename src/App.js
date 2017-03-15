import React, { PropTypes, Component } from 'react';
import './App.css';
//import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return(
      <div className="home">
        <Header />
        <div className="container App-content">
          {console.log(this.props.routes)}
        </div>
        <Footer />
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array
};

export default App;