import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './containers/Home.jsx';
import About from './containers/About.jsx';

export default () => {
	return(
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='about' component={About}/>
		</Route>
		);
 };