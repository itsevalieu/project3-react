import React, { Component } from 'react';
import { Button, Col, Row } from 'react-materialize';

const frontLang = ['Javascript', 'Python', 'PHP', 'jQuery', 'Something Else'];
const backLang = ['Java', 'Ruby', 'Python', 'Perl'];
const databaseType = ['Firebase', 'MongoDB', 'MySQL'];

function getRandomEntry(array){
	const upperBound = array.length;
	//console.log(upperBound);
	const randomIndex = Math.floor(Math.random() * upperBound);
	//console.log(array[randomIndex]);
	return array[randomIndex];
}

class GeneratorTechModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frontLanguage: getRandomEntry(frontLang),
			backLanguage: getRandomEntry(backLang),
			databaseTech: getRandomEntry(databaseType),

		};
	}
	render(){
	return(
		<div>
			<Row>
				Have you tried using {this.props.frontLanguage}?  Have you tried using it with {this.props.backLanguage}?  What about connecting that to a {this.props.databaseType} database?
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
}
GeneratorTechModal.defaultProps = {
	frontLanguage: getRandomEntry(frontLang),
	backLanguage: getRandomEntry(backLang),
	databaseType: getRandomEntry(databaseType)
};
export default GeneratorTechModal;