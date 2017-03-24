import React, { Component } from 'react';
import { Button, Col, Row, Icon } from 'react-materialize';

//var io = require('socket.io')();

class Chatroom extends Component{
	render(){
		return(
			<div className="chatroom">
				<Row>
					<Col s={12}>
						Main Chat Window
					</Col>
				</Row>
				<Row>
					<Col s={10}>
						Send Window
					</Col>
					<Col s={2}>
						<Icon>question_answer</Icon>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Chatroom;