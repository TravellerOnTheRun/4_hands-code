import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Container from '../../../components/Reusables/Container/Container';
import Card from '../../../components/Reusables/Card/Card';
import Button from '../../../components/Reusables/Button/Button';
import NewClient from '../../../components/NewClient/NewClient';

const Clients = props => {

	const [ clients, setClients ] = useState([]);
	const [ makingClient, setMakingClient ] = useState(false);

	useEffect(() => {
		axios.get(`https://portfolio-ccandpc.firebaseio.com/clients.json?auth=${props.token}`)
			.then(response => {
				const clientsArray = [];
				//TODO Add Clients Here
				console.log(response);
				setClients(clientsArray);
			}).catch(error => console.log(error));
	}, []);

	const toggleClientMaker = () => {
		setMakingClient(!makingClient);
	};

	//Display or not display a form
	let clientMaker = null;
	if(makingClient) clientMaker = <NewClient toggleClientMaker={toggleClientMaker}/>;

	return (
		<Container>
			<Button clicked={toggleClientMaker}>Make a New Client</Button>
			{clients.map(client => (
				<Card key={client.id}>
					{/*TODO Fill in the Client Form */}
				</Card>
			))}
			{clientMaker}
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		token: state.token
	};
};
	
export default connect(mapStateToProps)(Clients);