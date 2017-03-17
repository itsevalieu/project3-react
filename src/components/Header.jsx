import React, { Component } from 'react';
import signUpModal from './signUpModal';
import signInModal from './signInModal';

class Header extends Component {
	toggleSignInModal() => {
		console.log('modal clicked');
		let modal = document.querySelector('#signIn-modal-trigger');

	}

	render() {
		return(
			<header>
			<nav className="black" role="navigation">
			<div className="nav-wrapper container">
			<a id="logo-container" href="#" className="brand-logo"><span>CODE</span><span>SPIRATION</span></a>
			<ul className="right hide-on-med-and-down">
			<li><button data-target="signUpModal" className="btn grey modal-trigger" id="signUp-modal-trigger">Sign-Up</button></li>
			</ul>
			<ul className="right hide-on-med-and-down">
			<li><button data-target="signInModal" className="btn black modal-trigger" id="signIn-modal-trigger">Sign-In</button></li>
			</ul>
			<ul className="right hide-on-med-and-down">
			<li><a href="/about">About</a></li>
			</ul>
			<ul className="right hide-on-med-and-down">
			<li><a href="/faq">FAQ</a></li>
			</ul>
			<ul id="nav-mobile" className="side-nav">
			<li><a href="/chat">CHANNEL</a></li>
			</ul>
			<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">MENU</i></a>
			</div>
			</nav>
			{signUpModal}
			{signInModal}
			</header>			
			);
	}
}
export default Header;