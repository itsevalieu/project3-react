import React, { Component } from 'react';

class PageNotFound extends Component{
	render(){
		return(
			<div className="default">
			ERROR 404: Page Not Found <a href="javascript:history.back()">Return to Previous Page</a>
			</div>
			);
	}
}

export default PageNotFound;