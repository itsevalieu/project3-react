import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

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