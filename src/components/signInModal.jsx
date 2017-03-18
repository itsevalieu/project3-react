// Sign In Modal Component - signInModal.jsx
import React from "react";
//import "./modal.css";

const SignInModal = () => {
		return (
			<div id="signInModal" className="modal">
			    <div className="modal-content">
			        <h4>Sign-In</h4>
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
			    </div>
			</div>
		);
	};
export default SignInModal;