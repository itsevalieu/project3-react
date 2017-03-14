	import React, { Component } from "react";

	class Homepage extends Component{
		render() {
			return(
				<main>
				<div class="section no-pad-bot" id="index-banner">
				<div class="container">
				<div class="row">&nbsp;</div>

				<div class="center_section">
				<div class="row">&nbsp;</div>
				<div class="header center red-text"><span>CODE</span><span>SPIRATION</span></div>
				<h1 class="header center red-text"><span>Idea Generator</span></h1>
				<div class="row center">
				<h5 class="header col s12 light">Need some inspiration for your next coding project?<br/>
				<b>Well, Let's get pickin'!</b></h5>
				</div>
				<div class="row">&nbsp;</div>

				<div class="row center"> <a href="#" type="submit" name="action" class="btn-large waves-effect waves-light red">eenie meenie miney mo!</a> </div>
				<div class="row">&nbsp;</div>

				</div>
				</div>
				</div>
				</main>
				);
		}
	}

	export default Homepage;