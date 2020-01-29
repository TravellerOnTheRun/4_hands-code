import React from 'react';
import axios from '../../axios-forms';
import { connect } from 'react-redux';

//HOCs
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


import Home from '../../components/Pages/Home/Home';
import About from '../../components/Pages/About/About';
import Services from '../../components/Pages/Services/Services';
import Contact from '../../components/Pages/Contact/Contact';
import Auth from '../Authentication/Auth';
import Admin from '../Admin/Admin';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';


const navLinksArray = [
	{
		className: 'a one',
		to: '/',
		label: 'Главная',
		id: 'glavnaya'
	},
	{
		className: 'a two',
		to: '/about/',
		label: 'О нас',
		id: 'onas'
	},
	{
		className: 'a three',
		to: '/contact/',
		label: 'Связь',
		id: 'svyaz'
	}, 
	{
		className: 'a four',
		to: '/services/',
		label: 'Услуги',
		id: 'uslugi'
	}
];
		

const  Portfolio = props => {
	let routes = (
		<Switch>
			<Route path='/' exact component={Home}/>
			<Route path='/about/' exact component={About}/>
			<Route path='/services/' exact component={Services}/>
			<Route path='/contact/' exact  component={Contact}/>
			<Route path='/admin-auth' component={Auth} />
			<Route render={() => <h1>Page you're looking for does not exist</h1>} />
		</Switch>
	);

	let linksArray;
	if(props.token) {
		routes= (
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/about/' exact component={About}/>
				<Route path='/services/' exact component={Services}/>
				<Route path='/contact/' exact  component={Contact}/>
				<Route path='/admin-4h_ands' component={Admin}/>
				<Route render={() => <h1>Page you're looking for does not exist</h1>} />
			</Switch>
		);
		linksArray = navLinksArray.concat({
			className: 'something',
			to: '/admin-4h_ands',
			label: 'Admin',
			id: 'admin'
		})
	} else {
		linksArray = navLinksArray.filter(el => el.id !== 'admin');
	};

	return(
		<React.Fragment>
			<header>
				<Nav navLinks={linksArray}/>
			</header>
			<main>
				{routes}
			</main>
			<Footer />
		</React.Fragment>			
	);
};

const mapStateToProps = state => {
	return {
		token: state.token
	};	
};

export default connect(mapStateToProps)(withErrorHandler( Portfolio, axios ));