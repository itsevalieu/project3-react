import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';

const ideaList = ['To Do List', 'Tic Tac Toe', 'Blog Site', 'Hangman', 'War (Card Game)', 'Match 2', 'Rock Paper Scissors'];
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
						<h5 className="red-text ideaModal">
							The Coding Overlords have spoken...</h5>
					</Col>
				</Row>
				<Row>
					<Col s={12}>
						<h6>Go forth and program me:</h6>
						<h4 className="center">{this.props.idea}</h4>
						<h6>while using:</h6> 
						<h4 className="center">{this.props.codeLanguage}</h4>
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
