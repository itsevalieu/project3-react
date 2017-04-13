import React, { Component } from 'react';
import { Icon, Row, Badge, Collapsible } from 'react-materialize';
class NotificationWindow extends Component {
	render() {
	console.log('dashboard right column');
	return(
		<div id='dashNotifications'>
			<h4 className='grey-text text-darken-4'><span>Notifications</span></h4>
			<Collapsible data-collapsible='accordian'>
				<li>
					<div className='collapsible-header'>
						<Badge className='silver'>4 Days Left{/* this.props.notificationAlertType */}</Badge>
						<Icon>whatshot</Icon>
							Introduction to HTML/CSS 
							{/* this.props.notificationTitle */}
					</div>
					<div className='collapsible-body'>
						<p>
							Complete your first assignment in learning HTML/CSS.  Create a website with Hello World displayed, centered and in large, bold text.  Try to impliment pseudoclasses to create hover effects or to change the text to different colors after a certain time has elapsed.
							{/* this.props.notificationText*/} 
						</p>
					</div>
				</li>
			</Collapsible>
			<Collapsible data-collapsible='accordian'>
				<li>
					<div className='collapsible-header'>
						<Badge className='silver'>7 Days Left{/* this.props.notificationAlertType */}</Badge>
						<Icon>reorder</Icon>
							Introduction to Javascript 
							{/* this.props.notificationTitle */}
					</div>
					<div className='collapsible-body'>
						<p>
							Now that your Hello World website has been created, we're going to use Javascript to modify the page, add click events.  Try to change the font when the words are clicked or have it repeat Hello World every time you hit the enter button.
							{/* this.props.notificationText*/} 
						</p>
					</div>
				</li>
			</Collapsible>
			<Collapsible data-collapsible='accordian'>
				<li>
					<div className='collapsible-header'>
						<Badge className='silver'>12 Days Left{/* this.props.notificationAlertType */}</Badge>
						<Icon>reorder</Icon>
							JQuery &amp; AJAX Calls 
							{/* this.props.notificationTitle */}
					</div>
					<div className='collapsible-body'>
						<p>
							Now that you have your feet wet with Javascript, let's try some jQuery.  JQuery might simplify certain actions like Ajax calls, keeping your code shorter and more readable.  Make sure to include jQuery in your HTML file and let's try to append new data from an outside source.
							{/* this.props.notificationText*/} 
						</p>
					</div>
				</li>
			</Collapsible>
		</div>
		);
	}
}
export default NotificationWindow;