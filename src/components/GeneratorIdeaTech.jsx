import React from 'react';
import { Button, Modal, Col, Row } from 'react-materialize';
import '../../public/assets/sass/codespiration.css';


let GeneratorIdeaTech = () => {
	return(
	    <div className="row">
	      <div className="col s6" id="ideaGeneratorBox">
	        <div className="container">
	          <div className="row center generatorBoxContent">
	            <h5>Give me an idea...</h5>
	            <p>Need inspiration for a coding project? Click below to randomly generate an idea!</p>
	            <Modal header='Idea Generator' trigger={<Button className='red btn btn-large' waves='light'>Give Me Ideas</Button>}>
					<GeneratorIdeaModal />
				</Modal>
	          </div>
	        </div>
	       </div>
	      <div className="col s6" id="techGeneratorBox">
	        <div className="container">
	          <div className="row center generatorBoxContent">
	            <h5>Teach me new tech...</h5>
	            <p>Want to learn a new technology, but can’t decide on which one? Click below to randomly generator the newest addition to your tech stack!</p>
	            <Modal header='Tech Generator' trigger={<Button className='red btn btn-large' waves='light'>Tech Me Tech</Button>}>
					<GeneratorTechModal />
				</Modal>
	          </div>
	        </div>
	      </div>
	    </div>
	);
}
export default GeneratorIdeaTech;
