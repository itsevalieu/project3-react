import React, { Component } from 'react';
import logoHTML from '../public/assets/images/HTML.png';
import logoCSS from '../public/assets/images/CSS.png';
import logoJS from '../public/assets/images/JS.png';

class TechWindow extends Component {
	render() {
		return (
			<div id='techWindow'>
				<h4 className='grey-text text-darken-4'><span>Languages</span></h4>
				<div className='card horizontal hoverable'>
					<div className='card-image'>
						<img className='techBadgeImage' src={logoHTML} alt='Hyper Text MarkUp Language'/> {/* this.props.imageLink | this.props.imageAltText */}
					</div>
					<div className='card-stacked'>
						<div className='card-content'>
							<p>HTML5 - Hyper Text Markup Language {/* this.props.techTitle */} </p>
						</div>
						<div className='card-action'>
							<a className='red-text' href='https://developer.mozilla.org/en-US/docs/Learn/HTML' target='_blank'>Learn More</a> {/* this.props.techLink */}
						</div>
					</div>
				</div>
				<div className='card horizontal hoverable'>
					<div className='card-image'>
						<img className='techBadgeImage' src={logoCSS} alt='Cascading Style Sheet Language'/> {/* this.props.imageLink | this.props.imageAltText */}
					</div>
					<div className='card-stacked'>
						<div className='card-content'>
							<p>CSS3 - Cascading Style Sheet{/* this.props.techTitle */}</p>
						</div>
						<div className='card-action'>
							<a className='red-text' href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>Learn More</a> {/* this.props.techLink */}
						</div>
					</div>
				</div>
				<div className='card horizontal hoverable'>
					<div className='card-image'>
						<img className='techBadgeImage' src={logoJS} alt='Javascript Programming Language'/> {/* this.props.imageLink | this.props.imageAltText */}
					</div>
					<div className='card-stacked'>
						<div className='card-content'>
							<p>JavaScript ES6 - ECMAScript{/* this.props.techTitle */}</p>
						</div>
						<div className='card-action'>
							<a className='red-text' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>Learn More</a> {/* this.props.techLink */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TechWindow;