import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import './index.css';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Dashboard from './containers/Dashboard';
import FAQ from './containers/FAQ';

const appEntry = <Router history={browserHistory}>
<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path='/faq' component={FAQ}/>
		</Route>
</Router>
ReactDOM.render(
  appEntry,
  document.querySelector('#root')
);
