import React from 'react';

let TechWindow = () => {
	console.log('technology window');
	return(
		<div id='techWindow'>
			<h4 className='grey-text text-darken-4'><span>Languages</span></h4>
			<div className='card horizontal hoverable'>
				<div className='card-image'>
					<img src='images/html.png' alt='HTML Web Language'/> {/* this.props.imageLink | this.props.imageAltText */}
				</div>
				<div className='card-stacked'>
					<div className='card-content'>
						<p>Hyper Text Markup Language {/* this.props.techTitle */} </p>
					</div>
					<div className='card-action'>
						<a className='red-text' href='#'>Learn More</a> {/* this.props.techLink */}
					</div>
				</div>
			</div>
		</div>
		);
}

export default TechWindow;