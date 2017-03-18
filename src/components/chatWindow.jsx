//Chatroom - Main Chat Window
import React from 'react';

var chatWindow = React.createClass({
	render(){
		return(
				<div className="chatWindow">
				<h1>Chatroom:</h1>
				{this.props.messages.map((message, i) =>{
					return(
						<chatMessage key={i} user={chatMessage.user} text={chatMessage.text} />
						);
				})
				}
				</div>
			);
	}
});