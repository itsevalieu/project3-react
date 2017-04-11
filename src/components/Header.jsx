import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import Logo from '../../public/assets/images/logo.svg';
import SignInModal from './signInModal.jsx';
import SignUpModal from './signUpModal.jsx';
import '../../public/assets/sass/components/header.scss';

class Header extends Component {
	render() {
		return (
			<header>
				<nav id='myTopnav' className='topnav'>
					<div className='container'>
						<a href='#home' className='nav-logo'>
							<img className='logoImage' src={Logo} />
						</a>
						<a href='#submissions'>Submissions</a>
						<a href='#generator'>Generator</a>
						<a href='#dashboard'>Dashboard</a>
						<a href=''>Sign Up</a>
						<a href=''>Sign In</a>
						{
						//<a href='' className='icon' onclick={myFunction}>&#9776;</a>
						}
					</div>
				</nav>
			</header>
		);
	}
}
export default Header;

/*
<header id="header">
	<nav className="black" role="navigation">
		<div className="nav-wrapper container">
		<a id="logo-container" href="/" className="brand-logo"><span>CODE</span><span>SPIRATION</span></a>
		<ul className="right hide-on-med-and-down">
		<li>
		<Modal header='Create An Account:' 
		trigger={<Button className='btn grey' waves='light'>Sign Up</Button>}>
			<SignUpModal />
		</Modal>
		</li>
		</ul>
		<ul className="right hide-on-med-and-down">
		<li>
		<Modal header='Sign In:' trigger={<Button className='btn black'>Sign In</Button>} className='' waves='light'>
		<SignInModal />
		</Modal>
		</li>
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
</header>			
*/