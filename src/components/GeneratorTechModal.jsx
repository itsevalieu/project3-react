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

	const divStyle = {
		"fontFamily": "'Lato', sans-serif", 
		"color": "black", 
		"fontWeight": 300, 
		"textTransform": "uppercase"
	}
	
	return(
		<div>
			<Row>
				<Col s={12}>
					<h5 className="red-text" style={divStyle}>The Coding Overlords have spoken...</h5>
				</Col>
			</Row>
			<Row>
				<Col s={12}>
					<h6>Have you tried using:</h6>
					<h4 className="center">{this.props.frontLanguage}</h4>
					<h6>Have you tried using it with</h6> 
					<h4 className="center">{this.props.backLanguage}</h4>
					<h6>What about connecting that to a </h6>
					<h4 className="center">{this.props.databaseType}</h4>
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