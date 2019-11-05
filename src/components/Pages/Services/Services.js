import React from 'react';
import Jumbo from '../../Jumbo/Jumbo';
import Text from './Text/Text';
import './Services.css';
import Form from '../../Form/Form';

const Services = () =>(
	<div>
		<Jumbo className='jumbot' type='services' />
		<div id="read"><Text className='textbox'/></div>
		<div id='form'><Form/></div>
	</div>
);

export default Services;