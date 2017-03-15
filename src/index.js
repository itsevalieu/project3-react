import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import makeRoutes from './routes';
import './index.css';

import App from './App';
import Home from './containers/Home';

const appEntry = <Router history={browserHistory}>
<Route path='/' component={App}>
			<IndexRoute component={Home}/>

		</Route>
</Router>
ReactDOM.render(
  appEntry,
  document.querySelector('#root')
);
