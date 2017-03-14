import React, { Component } from 'react';
import { Header } from 'react-router';
import { Homepage } from 'react-router';
import { Footer } from 'react-router';

class Home extends Component {
	render(){
		return(
				<div>
				{ Homepage }
				{ Footer }
				</div>
			);
	}
}

export default Home;