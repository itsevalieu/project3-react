import React from 'react';
import { Button, Modal, Col, Row } from 'react-materialize';
import GeneratorIdeaModal from './GeneratorIdeaModal.jsx';


let GeneratorIdea = () => {
	return(
	<div>
		<Col s={6}>
			<Row>
				<Col s={12}>
				<h5 className='header light'>
					I need a new project <b>idea</b>...
				</h5>
				</Col>
			</Row>
			<Row>
				<Col s={12}>
					<Modal header='Idea Generator' trigger={<Button className='red btn btn-large' waves='light'>Give Me Ideas</Button>}>
						<GeneratorIdeaModal />
					</Modal>
				</Col>
			</Row>
		</Col>
	</div>

	/*
	console.log('Generator Idea');
	return(
		<div id='generator-idea' className='col s6'>
			<h5 className='header col s12 light'>
				I need a new project <b>idea</b>...
			</h5>
			<a href='#ideaGeneratorModal' type='submit' name='action' className='btn-large waves-effect waves-light red' onClick={openIdeaModal}>Give Me Ideas</a>
			<GeneratorIdeaModal />
		</div>
		*/
		);
}
export default GeneratorIdea;