import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
// import './index.css';

import App from './App';
import Home from './containers/Home.jsx';
import About from './containers/About.jsx';
import Dashboard from './containers/Dashboard.jsx';
import Generator from './containers/Generator.jsx';
import Chatroom from './containers/Chatroom.jsx';
import FAQ from './containers/FAQ.jsx';
import PageNotFound from './containers/PageNotFound.jsx';

const appEntry = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path='/generator' component={Generator}/>
			<Route path='/chatroom' component={Chatroom}/>
			<Route path='/faq' component={FAQ}/>
			<Route path='/*' component={PageNotFound}/>
		</Route>
	</Router>
);

ReactDOM.render(
  appEntry,
  document.querySelector('#root')
);
