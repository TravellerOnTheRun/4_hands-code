import React from 'react';
import Jumbo from '../../Jumbo/Jumbo';
import Form from '../../Form/Form';
import LinkContainer from './LinkContainer/LinkContainer';
import './Contact.css';

const Contact = () =>(
	<div>
		<Jumbo className='jumboContact'/>
		<Form />
		<LinkContainer />
	</div>
);

export default Contact;