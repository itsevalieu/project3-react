import React, { Component } from 'react';
import { Button, Col, Row } from 'react-materialize';

const ideaList = ['To Do List', 'Tic Tac Toe', 'Blog Site', 'Hangman'];
const codeLanguage = ['jQuery', 'PHP', 'Python', 'Java'];

function getRandomEntry(array){
	const upperBound = array.length;
	//console.log(upperBound);
	const randomIndex = Math.floor(Math.random() * upperBound);
	//console.log(array[randomIndex]);
	return array[randomIndex];
}


class GeneratorIdeaModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idea: getRandomEntry(ideaList),
			codeLanguage: getRandomEntry(codeLanguage)
		}

	}
	render() {
	return(
		<div>
			<Row>
				<Col s={12}>
					Go forth and program me {this.props.idea}, using {this.props.codeLanguage}.
				</Col>
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
GeneratorIdeaModal.defaultProps = {
			idea: getRandomEntry(ideaList),
			codeLanguage: getRandomEntry(codeLanguage)
};
export default GeneratorIdeaModal;