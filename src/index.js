import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import './index.css';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Dashboard from './containers/Dashboard';
import Generator from './containers/Generator';
import Chatroom from './containers/Chatroom';
import FAQ from './containers/FAQ';
import PageNotFound from './containers/PageNotFound';

function toggleModal() {
		let modalTrigger = document.querySelectorAll('.modal-trigger');
		//console.log(modalTrigger);

		for (var i = modalTrigger.length - 1; i >= 0; i--) {
			modalTrigger[i].onclick = function(){
				console.log('modal clicked - trigger modal opening');
			};
		}
}

const appEntry = <Router history={browserHistory}>
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

ReactDOM.render(
  appEntry,
  document.querySelector('#root')
);
