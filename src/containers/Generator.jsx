import React, { Component } from 'react';
	
console.log('generator');

class Generator extends Component {

	render(){
		return(
			<main id='generator'>
				<div id='index-banner' className='section no-pad-bot'>
					<div className='container'>
						<div className='center_section'>
							<div className='header center red-text'><span>CODE</span><span>SPIRATION</span>
								<h1 className='header center red-text'><span>Idea Generator</span></h1>
							</div>
							<div className='row center'>
								<h5 className='header col s12 light'>
									Need some inspiration for your next coding project?<br/>
									<b>Well, let's get picking!</b>
								</h5>
							</div>
							<div className='row center'>
								<a href='#' type='submit' name='action' className='btn-large waves-effect waves-light red'>Eenie Meenie Miney Mo!!!</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
export default Generator;