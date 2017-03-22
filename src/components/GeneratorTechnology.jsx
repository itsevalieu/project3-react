import React from 'react';
import { Button, Modal, Col, Row } from 'react-materialize';
import GeneratorTechModal from './GeneratorTechModal.jsx';

const GeneratorTechnology = () => {
	console.log('Generator Technology');
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
export default GeneratorTechnology;

/*
<div id='generator-technology' className='col s6'>
			<h5 className='header col s12 light'>
				I want to learn a new <b>technology</b>...
			</h5>
			<a href='#techGeneratorModal' type='submit' name='action' className='btn-large waves-effect waves-light red'>
				Teach Me Tech
			</a>
		{<GeneratorTechnologyModal />}
		</div>
*/