import React from 'react';

function closeIdeaModal() {
	console.log('close the modal');
	const ideaModal = document.querySelector('#generatorIdeaModal');
	ideaModal.style.display = 'none';
}

function acceptProjectIdea() {
	console.log('idea accepted');
	const projectName = document.querySelector('#projectName');
	const projectTechnology = document.querySelector('#projectTechnology');
	console.log(projectName + ' ' + projectTechnology);
	window.location = '/dashboard';
}

function generateIdea() {
	console.log('generate project idea');
}

let GeneratorIdeaModal = () => {
	return(
		<div id='generatorIdeaModal' className='modal'>
		{generateIdea}
			<div className='modal-content'>
				<h5 className='red-text'>
					The Coding Lords Have Spoken!!!
				</h5>
				<p>
					Go forth and code me: <span id='projectName'>{/* this.props.ideaName */ }</span> in <span id='projectTechnology'>{/* this.props.techName */}</span>
				</p>
			</div>
			<div className='ideaModalFooter'>
				<a className='modal-action modal-close waves-effect waves-red btn-flat' href='#' onClick={acceptProjectIdea}>
				Accept
				</a>
				<a className='modal-action modal-close waves-effect waves-red btn-flat' href='#' onClick={closeIdeaModal}>
				No Thanks
				</a>
			</div>
		</div>
		);
}

export default GeneratorIdeaModal;