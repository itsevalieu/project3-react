import React from 'react';
import { Button, Col, Row } from 'react-materialize';

const GeneratorTechModal = () => {
	return(
		<div>
			<Row>
				Have you tried using React?  Have you tried using it with jQuery?  Fun huh?
			</Row>
			<Row>
				<Col s={6}>
					<Button className='btn btn-large black' waves='light'>
						No Thanks
					</Button>
				</Col>
				<Col s={6}>
					<Button className='btn btn-large red' waves='light'>
						I Accept
					</Button>
				</Col>
			</Row>
		</div>
		);
}

export default GeneratorTechModal;