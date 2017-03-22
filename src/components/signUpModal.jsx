import React from 'react';
import { Row, Button, Input, Icon, Col } from 'react-materialize';

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
					<Button>Submit</Button>
				</Col>
			</Row>
			<Row>
				<Col s={3}>
					Alt Sign Up Methods:
				</Col>
				<Col s={2}>
					Facebook
				</Col>
				<Col s={2}>
					Github
				</Col>
				<Col s={2}>
					Twitter
				</Col>
			</Row>
		</div>
		);
}
export default SignUpModal;