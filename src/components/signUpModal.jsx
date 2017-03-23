import React from 'react';
import { Row, Button, Input, Icon, Col, Dropdown, NavItem } from 'react-materialize';

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
				<Col s={4} offset='s10'>
					<Button className='red'>Submit</Button>
				</Col>
			</Row>
			<Row>
				<Dropdown className='silver' trigger={
					<Button className='btn black' waves='light'>Alt. Sign Up Methods</Button>
				}>
					<NavItem>Facebook</NavItem>
					<NavItem divider />
					<NavItem>GitHub</NavItem>
					<NavItem divider />
					<NavItem>Twitter</NavItem>
				</Dropdown>
			</Row>
		</div>
		);
}
export default SignUpModal;