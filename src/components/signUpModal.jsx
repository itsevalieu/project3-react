import React from 'react';
import { Row, Button, Input, Icon, Col, Dropdown, NavItem } from 'react-materialize';
import GitHubMark from '../../public/assets/images/GitHub-Mark-32px.png';
import FaceBookIcon from '../../public/assets/images/facebook-icon.jpg';
import TwitterIcon from '../../public/assets/images/twitter-icon.jpg';

function submitUserDetails() {
	console.log('submit sign up details');
	/*
	const xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/user');
	xhr.onload = function() {
		if(){}
			else{}
	};
	xhr.send();
	*/
} 

const SignUpModal = () => {
	return (
		<div>
			<Row>
				<Col s={6}>
					<Input placeholder='Full Name' s={12} label='Full Name' validate>
						<Icon>perm_identity</Icon>
					</Input>
				</Col>
				<Col s={6}>
					<Input placeholder='Email Address' s={12} label='Email' type='email' validate>
						<Icon>email</Icon>
					</Input>
				</Col>
			</Row>
			<Row>
				<Col s={6}>
					<Input placeholder='User Name' s={12} label='User Name' validate>
						<Icon>assignment_ind</Icon>
					</Input>
				</Col>
				<Col s={6}>
					<Input placeholder='Password' s={12} label='Password' type='password' validate>
						<Icon>lock_outline</Icon>
					</Input>
				</Col>
			</Row>
			<Row>
				<Col s={1}>
					<img src={GitHubMark}/>
				</Col>
				<Col s={1}>
					<img src={FaceBookIcon}/>
				</Col>
				<Col s={1}>
					<img src={TwitterIcon}/>
				</Col>
				<Col s={3} offset='s6'>
					<Button className='red'>Submit</Button>
				</Col>
			</Row>
		</div>
		);
}
export default SignUpModal;