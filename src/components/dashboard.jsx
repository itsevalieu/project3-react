// Main Dashboard - dashboard.jsx
import React, { Component } from "react";
import { Row, Button, Input, Icon, Col } from 'react-materialize';
import DashRightColumn from './DashRightColumn.jsx';
//import "./dashboard.css";

class dashboard extends Component{
	render(){
		return(
			<div>
				<Row>
					<Col s={3}>
						<h1>User Navigation</h1>
					</Col>
					<Col s={9}>
						TEST-DASHBOARD
						<DashRightColumn />
					</Col>
				</Row>
			</div>
			);
	}
}

export default dashboard;