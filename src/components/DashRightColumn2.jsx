import React from 'react';

let DashRightColumn = () => {
	console.log('dashboard right column');
	return(
		<div id='dash-rightColumn' className='col m6'>
			<h4 className='grey-text text-darken-4'><span>Notifications</span></h4>
			<ul className='collapsible' data-collapsible='accordian'>
				<li>
					<div className='collapsible-header'>
						<span className='new badge red'>4{/* this.props.notificationAlertType */}</span>
						<i className='material-icons'>filter_drama</i>
						First {/* this.props.notificationTitle */}
					</div>
					<div className='collapsible-body'>
				<p>Loren ipsum dolor sit amet. {/* this.props.notificationText*/} </p>
					</div>
				</li>
			</ul>
		</div>
		);
}
export default DashRightColumn;