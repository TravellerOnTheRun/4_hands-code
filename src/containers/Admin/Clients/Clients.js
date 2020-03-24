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

	const { token } = props;

	useEffect(() => {
		axios.get(`http://localhost:8080/admin/clients`, {
			headers: {
				Authorization: token
			}
		})
			.then(response => {
				const clientsArray = [];
				for( let client in response.data.clients) {
					clientsArray.push(response.data.clients[client]);
				};
				setClients(clientsArray);
			}).catch(error => console.log(error));
	},[token]);

	const toggleClientMaker = () => {
		setMakingClient(!makingClient);
	};

	//Display or not display a form
	let clientMaker = null;
	if(makingClient) clientMaker = <NewClient toggleClientMaker={toggleClientMaker}/>;

	return (
		<Container className='ClientsContainer'>
			<Button clicked={toggleClientMaker}>Make a New Client</Button>
			{clients.map(client => (
				<Card key={client._id}>
					<img alt='client_image' src={'http://localhost:8080/' + client.imageUrl}/>
					<h1>{client.name}</h1>
					<p>{client.character}</p>
					<p>{client.contactData}</p>
					<p>{client.linkToWebsite}</p>
					<p>{client.email_subsribtion}</p>
					<p>{client.subsribtion}</p>
					<p>{client.projects}</p>
					<p>{client.satisfactionRate}</p>
					<p>{client.moneyTransaction}</p>
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