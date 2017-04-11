import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import Logo from '../../public/assets/images/logo.svg';
import SignInModal from './signInModal.jsx';
import SignUpModal from './signUpModal.jsx';
import '../../public/assets/sass/components/header.scss';

class AuthHeader extends Component {
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
						<a href=''>Sign Out</a>
						{
						//<a href='' className='icon' onclick={myFunction}>&#9776;</a>
						}
					</div>
				</nav>
			</header>
		);
	}
}
export default AuthHeader;
