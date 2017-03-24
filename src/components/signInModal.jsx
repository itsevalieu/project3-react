// Sign In Modal Component - signInModal.jsx
import React from "react";
import { Row, Button, Input, Icon, Col } from 'react-materialize';
//import "./modal.css";

const SignInModal = () => {
		return (
			<div>
				<Row>
					<Input placeholder='UserName' s={6} label='User Name' validate><Icon>account_circle</Icon></Input>
					<Input id='passwordInput' placeholder='Password' s={6} label='password' type='password' validate><Icon>mode_edit</Icon></Input>
				</Row>
				<Row>
					<Col s={6}><Button className='red btn' waves='light'>Forgot My Login</Button></Col>
					<Col s={6}><Button name='action' type='submit' className='green btn' waves='light'>Sign In</Button></Col>
				</Row>
			</div>
		);
	};
export default SignInModal;