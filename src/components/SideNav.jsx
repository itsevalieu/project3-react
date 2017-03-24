import React from 'react';
import { Icon, Row } from 'react-materialize';

function getUserDetails() {
	let userImage = document.querySelector('.profileImage');
	console.log(userImage);
	let userName = document.querySelector('.profileName');
	console.log(userName);
}

const SideNav = () => {
	return (
		<div>
			<Row className='profileData'>
				<a href='/edit-profile'>
				<div id='profileImage'>
					<Icon className='large'>perm_identity</Icon>
				</div>
				<div id='profileName'>
					Demo Guest
				</div>
				</a>
			</Row>
			<Row className='sideNavBar'>
				<div>
					<a href='/generator'>
					GENERATOR
					</a>
				</div>
			</Row>
			<Row className='sideNavBar chatroom'>
				<div>
					<a href='/chatroom'>
					CHATROOM
					</a>
				</div>
			</Row>
			<Row className='sideNavBar leaderboard'>
				<div>
					<a href='/leaderboard'>
					LEADERBOARD
					</a>
				</div>
			</Row>
		</div>
		);
}
export default SideNav;
