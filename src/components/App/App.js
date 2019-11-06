import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import './App.css';
import Portfolio from '../../containers/Portfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';



const App = props => {
	useEffect(()=> {
		props.onCheckSignIn();
	},)
	return (
		<BrowserRouter>
			<div className="App">
				<Portfolio />
			</div>
		</BrowserRouter>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckSignIn: () => dispatch(actions.checkAutheticationState())
	};
};

export default connect(null, mapDispatchToProps)(App);


/* 
mobileNav = document.querySelector('.mobile-nav');
toggleButton = document.querySelector('.toggle-button');
backdrop = 
*/