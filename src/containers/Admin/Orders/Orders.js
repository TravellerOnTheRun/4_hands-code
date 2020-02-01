import React, { useState, useEffect } from 'react';
import  { connect } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

import Container from '../../../components/Reusables/Container/Container';
import Card from '../../../components/Reusables/Card/Card';
import Button from '../../../components/Reusables/Button/Button';
import NewOrder from '../../../components/NewOrder/NewOrder';
import axios from 'axios';

const Orders = props => {
	//State of the Orders
	const [ creatingOrder, setCreatingOrder ] = useState(false);
	const [ currentOrders, setCurrentOrders ] = useState([]);
	const [ archivedOrders, setArchivedOrders ] = useState([]);
	const [ updatingOrders, setUpdatingOrders ] = useState(true);

	//Fetch the orders
	useEffect(() => {
		axios.get('http://localhost:8080/admin/orders', {
			headers: {
				Authorization: props.token
			}
		})
			.then( response => {
				const currentOrdersArray = [];
				const archivedOrdersArray = [];
				for( let order in response.data.orders) {
					if(response.data.orders[order].archived) {
						archivedOrdersArray.push(response.data.orders[order]);
					} else {
						currentOrdersArray.push(response.data.orders[order]);
					};
				};
				setArchivedOrders(archivedOrdersArray);
				setCurrentOrders(currentOrdersArray);
				setUpdatingOrders(false);
			});
	}, [props.token, updatingOrders]);

	const archiveTheOrder = (id) => {
		axios.put('http://localhost:8080/admin/order', {
			id: id,
			archived: true
		}, {
			headers: {
				Authorization: props.token
			}
		})
		.then(response => {
			setUpdatingOrders(true);
		});
	};

	const creatingOrderHandler = () => {
		setCreatingOrder(!creatingOrder);
	};
	let newOrderComponent = null;
	if(creatingOrder) {
		newOrderComponent = <NewOrder 
								higherProps={props} 
								creatingOrder={creatingOrderHandler} 
								orders
								newOrderObjectData/>
	};

	return (
			<div>
				<header>
					<nav>
						<ul>
							<li><HashLink to='/admin-4h_ands/orders#current'>current</HashLink></li>
							<li><HashLink to='/admin-4h_ands/orders#finished'>finished</HashLink></li>
						</ul>
						<HashLink to="/admin-4h_ands/orders#neworder"><Button clicked={creatingOrderHandler}>New Order</Button></HashLink>
					</nav>
				</header>
				<div id='current'>
					<Container>
						<h1>Current Orders</h1>
						{currentOrders.map(order => (
							<Card key={order._id}>
								<h1>{order.nameOfTheOrder}</h1>
								<p>{order.description}</p>
								<h2>{order.name}</h2>
								<p>{order.contactData}</p>
								<p>{order.location}</p>
								<p>{order.timezone}</p>
								<p>{order.notes}</p>
								<Button clicked={() => archiveTheOrder(order._id)}>Mark as finished</Button>
							</Card>
						))}
					</Container>
				</div>
				<div id='finished'>
					<Container>
						<h1>Archived Orders</h1>
						{archivedOrders.map(order => (
							<Card key={order.nameOfTheOrder}>
								<h1>{order.nameOfTheOrder}</h1>
								<p>{order.description}</p>
								<h2>{order.name}</h2>
								<p>{order.contactData}</p>
								<p>{order.location}</p>
								<p>{order.timezone}</p>
								<p>{order.notes}</p>
							</Card>
						))}
					</Container>
				</div>
				<div id='neworder'>{newOrderComponent}</div>
			</div>
	);
};

const mapStateToProps = state => {
	return {
		token: state.token
	};
};

export default connect(mapStateToProps)(Orders);