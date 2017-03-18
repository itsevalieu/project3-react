import React from 'react';
import GeneratorIdeaModal from './GeneratorIdeaModal.jsx';

let GeneratorIdea = () => {
	console.log('Generator Idea');
	return(
		<div id='generator-idea' className='col s6'>
			<h5 className='header col s12 light'>
				I need a new project <b>idea</b>...
			</h5>
			<a href='#ideaGeneratorModal' type='submit' name='action' className='btn-large waves-effect waves-light red'>Give Me Ideas</a>
		</div>
		);
}
export default GeneratorIdea;