import React, { Component } from 'react';
import GeneratorIdea from '../components/GeneratorIdea.jsx';
import GeneratorTechnology from '../components/GeneratorTechnology.jsx';
	
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
								<GeneratorIdea />
								<GeneratorTechnology />
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
export default Generator;