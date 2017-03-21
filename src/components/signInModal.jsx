// Sign In Modal Component - signInModal.jsx
import React from "react";
//import "./modal.css";

function closeSignInModal() {
	const closeSignInModal = document.querySelector('#signInModal');
	closeSignInModal.style.display = 'none';
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
			        
			        <form className="col s12">
			            <div className="row">
			                <div className="input-field col s6">
			                    <input id="username" type="text" className="validate"></input>
			                    <label htmlFor="username">User Name</label>
			                </div>
			                <div className="input-field col s6">
			                    <input id="password" type="text" className="validate"></input>
			                    <label htmlFor="password">Password</label>
			                </div>
			            </div>
			        </form>
			        <div className='row'>
			        	<div className='col s6'>
			        		<button className='btn red waves-effect waves-green'>Sign In</button>
			        	</div>
			        	<div className='col s6'>
			        		<button className='btn black waves-effect waves-red'>Forgot My Login</button>
			        	</div>
			        </div>
			    </div>
			</div>
		);
	};
export default SignInModal;