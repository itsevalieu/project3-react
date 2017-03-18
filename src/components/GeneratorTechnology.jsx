import React from 'react';

const GeneratorTechnology = () => {
	console.log('Generator Technology');
	return(
		<div id='generator-technology' className='col s6'>
			<h5 className='header col s12 light'>
				I want to learn a new <b>technology</b>...
			</h5>
			<a href='#techGeneratorModal' type='submit' name='action' className='btn-large waves-effect waves-light red'>
				Teach Me Tech
			</a>
		</div>
	);
}
export default GeneratorTechnology;