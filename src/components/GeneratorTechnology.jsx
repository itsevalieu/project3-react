import React, { Component } from 'react';
import { Button, Modal, Col, Row } from 'react-materialize';
import GeneratorTechModal from './GeneratorTechModal.jsx';

class GeneratorTechnology extends Component {
	render() {
		return(
			<div id='techGenerator'>
				<Col s={6} className='container'>
					<Row className='generator-box'>
						<Col s={12}>
						<h3 className='header light'>
							I want to learn a new <b>technology</b>...
						</h3>
						<p>
							Want to learn a new technology, but can't decide on which one?  Click below to randomly generator the newest addition to your tech stack!
						</p>
						</Col>
					</Row>
					<Row>
						<Col s={12}>
							<Modal trigger={<Button className='button generator-button' waves='light'>Tech Me Tech</Button>}>
								<GeneratorTechModal />
							</Modal>
						</Col>
					</Row>
				</Col>
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
						<Modal trigger={<Button className='red btn btn-large' waves='light'>Tech Me Tech</Button>}>
							<GeneratorTechModal />
						</Modal>
					</Col>
				</Row>
			</Col>
		</div>	
	);
}
*/
