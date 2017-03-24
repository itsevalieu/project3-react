import React from 'react';
import { Icon, Row, Badge, Collapsible } from 'react-materialize';

let NotificationWindow = () => {
	console.log('dashboard right column');
	return(
		<Row id='dash-rightColumn' s={6}>
			<h4 className='grey-text text-darken-4'><span>Notifications</span></h4>
			<Collapsible data-collapsible='accordian'>
				<li>
					<div className='collapsible-header'>
						<Badge className='silver'>4 Days Left{/* this.props.notificationAlertType */}</Badge>
						<Icon>whatshot</Icon>
							First 
							{/* this.props.notificationTitle */}
					</div>
					<div className='collapsible-body'>
						<p>
							First Project Due Date
							{/* this.props.notificationText*/} 
						</p>
					</div>
				</li>
			</Collapsible>
		</Row>
		);
}
export default NotificationWindow;