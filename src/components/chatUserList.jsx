//Chatroom - User List
import React from 'react';

let connectedUsers = React.createClass({
	render(){
		return(
			<div className="connected-users">
			<h3>Online Members: </h3>
			<ul>
				{this.props.users.map((user,i) => {
					return(
						<li key={i}>
							{user}
						</li>
						);
				})
			}
			</ul>
			</div>
			);
	}
});