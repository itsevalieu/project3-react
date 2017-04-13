import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import Logo from '../public/assets/images/logo.png';
import '../public/assets/css/header.css';

class AuthHeader extends Component {
	render() {
		return (
			<header>
				<nav id='myTopnav' className='topnav'>
					<div className='container'>
						<a href='/' className='nav-logo'>
							<img className='logoImage' src={Logo} alt='CodeSpiriation Logo' />
						</a>
						<a href='/submissions'>Submissions</a>
						<a href='/generator'>Generator</a>
						<a href='/dashboard'>Dashboard</a>
						<a href='/leaderboard' className='disable-link'>Leaderboard</a>
						<a href='/chatroom' className='disable-link'>Chatroom</a>

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
