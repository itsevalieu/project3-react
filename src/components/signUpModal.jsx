import React from 'react';

const SignUpModal = () => {
	console.log('sign up');
	return (
		<div id='signUpModal' className='modal'>
			<h4>Sign Up</h4>
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
				 	<a href="#!" className="modal-action modal-close waves-effect waves-green btn red">Submit</a> 
				 	<a className="modal-action modal-close waves-effect waves-green btn-flat" href="#signInModal">Already have an Account? Click Here to Sign-in!</a> 
				 </div>
			</form>
		</div>
		);
}
export default SignUpModal;