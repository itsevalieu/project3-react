import React, { Component } from 'react';
import { Icon, Row } from 'react-materialize';
import userAvatar from '../../public/assets/images/user-image.png';

function getUserDetails() {
	let userImage = document.querySelector('.profileImage');
	console.log(userImage);
	let userName = document.querySelector('.profileName');
	console.log(userName);
}
class SideNav extends Component {
	render() {
	return (
		<div id='sidebar' className='three columns'>
			<div id='user-info'>
				<div className='row'>
					<a>
						<img className='user-image' src={userAvatar} />
					</a>
				</div>
				<div className='row'>
					<a className='sidebar-username'>DEMO-USER</a>
				</div>
				<div className='row'>
					<a className='sidebar-name'>First Name Last Name</a>
				</div>
				<div className='row'>
					<a className='sidebar-email'>demo@codespiration.com</a>
				</div>
			</div>
		</div>
		);
	}
}
export default SideNav;
