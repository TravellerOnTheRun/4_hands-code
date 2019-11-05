import React from 'react';

import Jumbo from '../../Jumbo/Jumbo';
import DemoAbout from './DemoAbout/DemoAbout';
import DemoServices from './DemoServices/DemoServices';
import Form from '../../Form/Form';

import styles from './Home.module.css';

const Home = () =>(
	<div className={styles.Home}>
		<Jumbo type='home'/>
		<DemoAbout />
		<DemoServices />
		<div id="form"><Form/></div>
	</div>
);

export default Home;