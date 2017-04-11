import React, { Component } from 'react';
import { Button, Modal, Col, Row } from 'react-materialize';
import GeneratorTechModal from './GeneratorTechModal.jsx';

class GeneratorTechnology extends Component {
	render() {
		return(
			<div id='techGenerator'>
				<div className='container'>
					<div className='generator-box'>
						<h3>Teach Me Tech</h3>
						<p>
							Want to learn a new technology, but can't decide on which one?  Click below to teach yourself a randomly generated technolgy stack to use on your next project or revamp a previous code project.
						</p>
						<Modal header='Tech Stack Generator' trigger={<Button className='button generator-button'>GO!</Button>}>
							<GeneratorTechModal />
						</Modal>
					</div>
				</div>
			</div>
		);
	}
}
export default GeneratorTechnology;

/* 
const GeneratorTechnology = () => {
	return(
		<div>
			<Col s={6}>
				<Row>
					<Col s={12}>
					<h5 className='header light'>
						I want to learn a new <b>technology</b>...
					</h5>
					</Col>
				</Row>
				<Row>
					<Col s={12}>
						<Modal header='Tech Generator' trigger={<Button className='red btn btn-large' waves='light'>Tech Me Tech</Button>}>
							<GeneratorTechModal />
						</Modal>
					</Col>
				</Row>
			</Col>
		</div>	
	);
}
*/