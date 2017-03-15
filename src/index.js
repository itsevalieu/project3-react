import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import './index.css';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';

const appEntry = <Router history={browserHistory}>
<Route path='/' component={App}>
			<IndexRoute component={Home}/>

			<Route path='/about' component={About}/>

		</Route>
</Router>
ReactDOM.render(
  appEntry,
  document.querySelector('#root')
);
