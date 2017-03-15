import React, { Component } from 'react';

class Home extends Component {
	render(){
		return(
			<main className="mainHero">
			<div className="section no-pad-bot" id="index-banner">
			<div className="container">
			<div className="row">&nbsp;</div>
			<div className="center_section">
			<div className="row">&nbsp;</div>
			<div className="header center red-text"><span>CODE</span><span>SPIRATION</span></div>
			<h1 className="header center red-text"><span>Idea Generator</span></h1>
			<div className="row center">
			<h5 className="header col s12 light">Need some inspiration for your next coding project?<br/>
			<b>Well, Let's get pickin'!</b></h5>
			</div>
			<div className="row">&nbsp;</div>
			<div className="row center"> 
			<a href="#" type="submit" name="action" className="btn-large waves-effect waves-light red">eenie meenie miney mo!</a> 
			</div>
			<div className="row">&nbsp;</div>
			</div>
			</div>
			</div>
			</main>
			);
	}
}
export default Home;