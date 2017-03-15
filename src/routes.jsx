import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';

export default () => {
	return(
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='about' component={About}/>
		</Route>
		);
 };