import React, { Component } from 'react';
import { Icon, Row, Col } from 'react-materialize';

function goBack() {
	window.history.back();
}

class PageNotFound extends Component{
	render(){
		return(
			<Row className="default">
				<Col s={12}>
					<Icon className='medium material-icons'>error</Icon><h2>ERROR 404: Page Not Found</h2><br/>
					<a href='#' onClick={goBack}>Return to Previous Page</a>
				</Col>
			</Row>
			);
	}
}

export default PageNotFound;