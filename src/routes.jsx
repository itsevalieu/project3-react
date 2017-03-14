import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './containers/Home';
import Dashboard from './components/Dashboard';
import About from './containers/About';

export default () => {
	return(
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>

			<Route path='/dashboard' component={dashboard} />
			<Route path='/about' component={About} />
		</Route>
		);
 };