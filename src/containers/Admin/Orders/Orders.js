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

	//Fetch the orders
	useEffect(() => {
		axios.get('https://portfolio-ccandpc.firebaseio.com/orders.json?auth=' + props.token)
			.then( response => {
				const currentOrdersArray = [];
				const archivedOrdersArray = [];
				for( let order in response.data.current) {
					const newObject = {
						id: order,
						...response.data.current[order]
					};
					currentOrdersArray.push(newObject);
				};
				if(response.data.archived) {
					for( let order in response.data.archived) {
						const newObject = {
							id: order,
							...response.data.archived[order]
						}
						archivedOrdersArray.push(newObject);
					};
					setArchivedOrders(archivedOrdersArray);
				};
				setCurrentOrders(currentOrdersArray);
				
			});
	}, [props.token]);

	const archiveTheOrder = (nameOfTheOrder) => {
		//Save the order to add it to the Archived node
		let orderToDelete = null;

		//Update the Current Orders Array
		const newCurrentOrders = currentOrders.filter(order => nameOfTheOrder !== order.nameOfTheOrder);
		setCurrentOrders(newCurrentOrders);

		//Delete The Finished order from the database
		orderToDelete = currentOrders.filter(order => nameOfTheOrder === order.nameOfTheOrder);
		const id = orderToDelete[0].id;
		axios.delete(`https://portfolio-ccandpc.firebaseio.com/orders/current/${id}.json?auth=${props.token}`);

		//Add The Finished order to archived node of the Database
		axios.post(`https://portfolio-ccandpc.firebaseio.com/orders/archived.json?auth=${props.token}`, orderToDelete[0])
			.then(response => {
				alert(`Posted ${id} to the database`);
			})
			.catch(error => console.log(error));
	};

	const creatingOrderHandler = () => {
		setCreatingOrder(!creatingOrder);
	};
	let newOrderComponent = null;
	if(creatingOrder) {
		newOrderComponent = <NewOrder 
								ordersProps={props} 
								creatingOrder={creatingOrderHandler} />
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
							<Card key={order.nameOfTheOrder}>
								<h1>{order.nameOfTheOrder}</h1>
								<p>{order.description}</p>
								<h2>{order.name}</h2>
								<p>{order.contactData}</p>
								<p>{order.location}</p>
								<p>{order.timezone}</p>
								<p>{order.notes}</p>
								<Button clicked={() => archiveTheOrder(order.nameOfTheOrder)}>Mark as finished</Button>
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