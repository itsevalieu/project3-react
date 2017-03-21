import React from 'react';

function closeSignUpModal() {
	const closeSignUpModal = document.querySelector('#signUpModal');
	console.log(closeSignUpModal);
	closeSignUpModal.style.display = 'none';
}

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
		);
}
export default SignUpModal;