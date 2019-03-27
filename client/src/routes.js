import React from 'react';
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom';
import App from './containers/App';
import Landing from './containers/Landing';

const routes = (
	<Router>
		<App>
			<Route exact path='/' component={ Landing } />
		</App>
	</Router>
);

export default routes;