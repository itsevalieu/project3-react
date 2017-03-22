import React, { PropTypes, Component } from 'react';
// import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
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

App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array
};

export default App;
