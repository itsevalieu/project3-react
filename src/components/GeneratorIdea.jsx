import React, { Component } from 'react';
import { Button, Modal, Col, Row } from 'react-materialize';
import GeneratorIdeaModal from './GeneratorIdeaModal';

class GeneratorIdea extends Component {
	render() {
	return(
		<div id='ideaGenerator'>
			<Col s={6} className='container'>
				<Row className='generator-box'>
					<Col s={12}>
					<h3 className='header light'>
						I need a new project <b>idea</b>...
					</h3>
					<p>
						Need inspiration for a coding project?  Click below to randomly generate a revolutionary idea!
					</p>
					</Col>
				</Row>
				<Row>
					<Col s={12}>
						<Modal actions={<Button waves='light' className='btn-btn-large red' modal='close'>Accept</Button>} trigger={<Button className='button generator-button' waves='light'>Give Me Ideas</Button>}>
							<GeneratorIdeaModal />
						</Modal>
					</Col>
				</Row>
			</Col>
		</div>
	);
}
}
export default GeneratorIdea;

	/*

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
					<Modal actions={<Button waves='light' className='btn-btn-large red' modal='close'>Accept</Button>} trigger={<Button className='red btn btn-large' waves='light'>Give Me Ideas</Button>}>
						<GeneratorIdeaModal />
					</Modal>
				</Col>
			</Row>
		</Col>
	</div>


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
