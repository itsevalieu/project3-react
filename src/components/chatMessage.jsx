//Chatroom Message Fetch
require React from 'react';

let Message = React.createClass({
render(){
	return(
		<div className="chatMessage">
		{this.props.user}:{this.props.text}
		</div>
		);
}
});