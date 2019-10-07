import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';


import Nav from '../../components/Nav/Nav';
import Orders from './Orders/Orders';
import Calls from './Calls/Calls';
import Clients from './Clients/Clients';
import Button from '../../components/Reusables/Button/Button';

const navLinks = [
	{
		className: '',
		to: '/admin-4h_ands/orders',
		label: 'Orders'
	},
	{
		className: '',
		to: '/admin-4h_ands/clients',
		label: 'Clients'
	},
	{
		className: '',
		to: '/admin-4h_ands/calls',
		label: 'Call'
	}
	
];

const Admin = (props) => {
	const logoutHandler = () => {
		props.onAuthLogout();
		props.history.push('/admin-auth');
	};
	return (
		<div>
			<Nav navLinks={navLinks}/>
			<Button clicked={logoutHandler}>Logout</Button>
			<Switch>
				<Route path={props.match.url + '/orders'} component={Orders} />
				<Route path={props.match.url + '/clients'} component={Clients}  />
				<Route path={props.match.url + '/calls'} component={Calls} />
			</Switch>
		</div>
	); 
};

const mapStateToProps = state => {
	return {
		token: state.token	
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuthLogout: () => dispatch(actions.authLogout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
