// Sign In Modal Component - signInModal.jsx
import React from "react";
//import "./modal.css";

function enableSignIn() {
	console.log('check for sign in');
	const userName = document.querySelector('#username').value;
	const password = document.querySelector('#passwordInput').value;

	if(userName !== ''){
	console.log(userName);
	console.log(typeof userName);
	}

	if(password !== '') {
	console.log(password);
	console.log(typeof password);
	}

	if(userName !== '' && userName.length >= 6 && password !== '' && password.length >= 6){
		console.log('activate login button');
		const signInButton = document.querySelector('#signInButton');
		signInButton.classList.remove('disabled');
	}


	return false;
}

function closeSignInModal() {
	const closeSignInModal = document.querySelector('#signInModal');
	const userName = document.querySelector('#username');
	userName.value = '';
	const password = document.querySelector('#passwordInput');
	password.value = '';
	const signInButton = document.querySelector('#signInButton');
	signInButton.className += ' disabled';
	closeSignInModal.style.display = 'none';
}

function loginRedirect() {
	window.location = '/forgot-login';
}

function submitLogin() {
	console.log('time to login');
	window.location = '/dashboard';
}

const SignInModal = () => {
		return (
			<div id="signInModal" className="modal">
			    <div className="modal-content">
			    <div className='row'>
			    	<div className='col s10'>
			    		<h4>Sign-In</h4>
			    	</div>
			    	<div className='col s1'>
			    		<button id='closeSignIn' className='btn black modal-close' onClick={closeSignInModal}>X</button>
			    	</div>
			    </div>
			        
			        <form className="signIn col s12">
			            <div className="row">
			                <div className="input-field col s6">
			                    <input id="username" type="text" className="validate password" onBlur={enableSignIn}></input>
			                    <label htmlFor="username">User Name</label>
			                </div>
			                <div className="input-field col s6">
			                    <input id="passwordInput" type="text" className="validate" name='password' onChange={enableSignIn} onBlur={enableSignIn}></input>
			                    <label htmlFor="password">Password</label>
			                </div>
			            </div>
			        </form>
			        <div className='row'>
			        	<div className='col s6'>
			        		<button id='signInButton' onClick={submitLogin} className='btn red waves-effect waves-green disabled'>Sign In</button>
			        	</div>
			        	<div className='col s6'>
			        		<button onClick={loginRedirect} className='btn black waves-effect waves-red'>Forgot My Login</button>
			        	</div>
			        </div>
			    </div>
			</div>
		);
	};
export default SignInModal;