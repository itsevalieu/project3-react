import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

function signOut() {
	console.log('sign me out');
}

class AuthFooter extends Component {
	render() {
		return(
			<footer>
				<ul id='footer'>
					<li className='left'>
						&copy; CODESPIRATION <i>Beta</i> 2017. All Rights Reserved.
					</li>
					<li className='left' id='learn-more'>
						<a href='/about'><i>Learn More</i></a>
					</li>
					<li className='right'>
						<Button id='signOut' onClick={signOut}>
							Sign Out
						</Button>
					</li>
				</ul>
			</footer>
			);
	}
}


export default AuthFooter;

/*
const AuthFooter = () => {
		return(
			<footer id='footer' className="page-footer grey darken-1">
				<div className='container'>
					<Row>
						<Col s={6}>
						Made by 
						<a href='/about' className='grey-text text-lighten-3'> Brandon, Eva, Francis &amp; Olivia
						</a>
						</Col>
						<Col s={3}>
						<a href='/about' className='grey-text text-lighten-1'>
							Learn More
						</a>
						</Col>
						<Col s={3}>
						<Button className='btn black'>
							Sign Out
						</Button>
						</Col>
					</Row>
				</div>
				
			</footer>
			);
}

<div class="footer-copyright grey darken-2">

				<div class="container">
				Made by <a class="grey-text text-lighten-3">Brandon, Eva, Francis, and Olivia</a>
				<a class="grey-text text-lighten-1" href="./user-about.html" style="padding-left: 10px;">Learn More</a>
				<button class="btn black right" style="margin-left: 20px;">Sign Out</button>
				</div>
				</div>
*/