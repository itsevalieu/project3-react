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
				<Col s={10}>Create an account:</Col>
			</Row>
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

		/*
		<div id='signUpModal' className='modal'>
		<div className='modal-content'>
		<div className='row'>
			<div className='col s10'>
				<h4>Sign Up</h4>
			</div>
			<div className='col s1'>
				<button id='closeSignUp' className='btn black modal-close' onClick={closeSignUpModal}>X</button>
			</div>
		</div>
			<form className='col s12'>
				<div className='row'>
					<div className='input-field col s6'>
						<input id='name' type='text' className='validate' />
						<label htmlFor='name'>Name</label>
					</div>
					<div className='input-field col s6'>
						<input id='email' type='email' className='validate' />
						<label htmlFor='email'>Email</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s6'>
						<input id='userName' type='text' className='validate' />
						<label htmlFor='userName'>User Name</label>
					</div>
					<div className='input-field col s6'>
						<input id='password' type='text' className='validate' />
						<label htmlFor='password'>Password</label>
					</div>
				</div>
				<div className='chips chips-initial'/>
				 <div className="modal-footer"> 
				 	<a href="#!" onClick={submitUserDetails} className="modal-action modal-close waves-effect waves-green btn red">Submit</a> 
				 	<a className="modal-action modal-close waves-effect waves-green btn-flat" href="#signInModal">Already have an Account? Click Here to Sign-in!</a> 
				 </div>
			</form>
			</div>
		</div>
		*/
		);
}
export default SignUpModal;