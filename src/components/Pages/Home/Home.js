import React from 'react';

import Jumbo from '../../Jumbo/Jumbo';
import DemoAbout from './DemoAbout/DemoAbout';
import DemoServices from './DemoServices/DemoServices';
import Form from '../../Form/Form';

import './Home.css';

const Home = () =>(
	<div className='home'>
		<Jumbo type='home'/>
		<DemoAbout />
		<DemoServices />
		<div id="form"><Form/></div>
	</div>
);

export default Home;