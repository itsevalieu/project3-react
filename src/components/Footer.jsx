// Footer Component - footer.jsx
import React, { Component } from "react";
import { Button } from 'react-materialize';
import '../public/assets/css/footer.css';

//import "./Footer.css";

class Footer extends Component{
	render(){
		return(
			<footer>
				<ul id='footer'>
					<li className='left'>
						&copy; CODESPIRATION <i>Beta</i> 2017. All Rights Reserved.&nbsp;
					</li>
					<li className='left' id='learn-more'>
						<a href='/about'><i> Learn More</i></a>
					</li>
				</ul>
			</footer>
			);
	}
}
export default Footer;

/*
			<footer id="footer" className="page-footer grey darken-1">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h5 className="white-text"><b>What dis is and what it do?</b></h5>
							<p className="grey-text text-lighten-4">Has a dip in creativity levels or writer's block caused you do fall off of your coding horse? Well saddle up, Matey! We've got some ideas for you... Codespiration is the premier idea-generation platform for your coding needs!</p>
						</div>
					</div>
				</div>
				<div className="footer-copyright grey darken-2">
					<div className="container"> Made by <a className="grey-text text-lighten-3">TEAM FOBE - Brandon, Eva, Francis, and Olivia</a> 
					</div>
				</div>
			</footer>
*/