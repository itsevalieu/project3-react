import React, { Component } from 'react';
import SignInModal from './signInModal.jsx';
import SignUpModal from './signUpModal.jsx';

function openSignUp() {
	const signUpModal = document.querySelector('#signUpModal');
	console.log(signUpModal);
	signUpModal.style.display = 'block';
	document.querySelector('#signInModal').style.display = 'none';
}

function openSignIn() {
	console.log('click sign in');
	const signInModal = document.querySelector('#signInModal');
	signInModal.style.display = 'block';
	document.querySelector('#signUpModal').style.display = 'none';
}

class Header extends Component {
	render() {
		return (
			<header id="header">
			<nav className="black" role="navigation">
			<div className="nav-wrapper container">
			<a id="logo-container" href="/" className="brand-logo"><span>CODE</span><span>SPIRATION</span></a>
			<ul className="right hide-on-med-and-down">
			<li>
				<button onClick={openSignUp} data-target='signUpModal' className="btn grey modal-trigger" id="signUp-modal-trigger">Sign-Up</button></li>
			</ul>
			<ul className="right hide-on-med-and-down">
			<li><button onClick={openSignIn} data-target='signInModal' className="btn black modal-trigger" id="signIn-modal-trigger">Sign-In</button></li>
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
			<SignUpModal />
			<SignInModal/>
			</header>			
			);
	}
}
export default Header;
