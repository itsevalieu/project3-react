import React from 'react';
import { Row } from 'react-materialize';

const SideNav = () => {
	return (
		<div>
			<Row className='profileData'>
				<a href='/edit-profile'>
				<div id='profileImage'>
					Profile Image
				</div>
				<div id='profileName'>
					Profile Name
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
			<Row className='sideNavBar'>
				<div>
					<a href='/chatroom'>
					CHATROOM
					</a>
				</div>
			</Row>
			<Row className='sideNavBar'>
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