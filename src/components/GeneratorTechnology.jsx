import React from 'react';
import { Button, Modal, Col, Row } from 'react-materialize';
import GeneratorTechModal from './GeneratorTechModal.jsx';

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
export default GeneratorTechnology;
