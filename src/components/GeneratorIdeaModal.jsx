import React from 'react';

let GeneratorIdeaModal = () => {
	return(
		<div id='generatorModal' className='modal'>
			<div className='modal-content'>
				<h5 className='red-text'>
					The Coding Lords Have Spoken!!!
				</h5>
				<p>
					Go forth and code me: {/* this.props.ideaName */ } in {/* this.props.techName */}
				</p>
			</div>
			<div className='ideaModalFooter'>
				<a className='modal-action modal-close waves-effect waves-red btn-flat' href='#'>
				Accept
				</a>
				<a className='modal-action modal-close waves-effect waves-red btn-flat' href='#'>
				No Thanks
				</a>
			</div>
		</div>
		);
}

export default GeneratorIdeaModal;