import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
import '../../public/assets/sass/codespiration.css';

const AuthFooter = () => {
		return(
			<footer>
				<div className='container'>
			      <ul id='footer'>
			        <li className='left'>&copy; CODESPIRATION 2017. All Rights Reserved.</li>
			        <li className='left'><a id='learnMore' href="./user-about.html"><i>Learn More</i></a></li>
			        <li className='right'><Button>Sign-Out</Button></li>
			      </ul>
				</div>		
			</footer>
			);
}
export default AuthFooter;

/*
<div class="footer-copyright grey darken-2">

				<div class="container">
				Made by <a class="grey-text text-lighten-3">Brandon, Eva, Francis, and Olivia</a>
				<a class="grey-text text-lighten-1" href="./user-about.html" style="padding-left: 10px;">Learn More</a>
				<button class="btn black right" style="margin-left: 20px;">Sign Out</button>
				</div>
				</div>
*/