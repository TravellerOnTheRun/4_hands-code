import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Card from '../../../components/Reusables/Card/Card';
import Spinner from '../../../components/Reusables/Spinner/Spinner';
import Button from '../../../components/Reusables/Button/Button';


class Calls extends Component {

	state = {
		fetchedCalls: [],
		loadingCalls: false
	};

	componentDidMount(){
		this.fetchCallsHandler();
	};

	fetchCallsHandler = () => {
		const url = 'https://portfolio-ccandpc.firebaseio.com/calls.json';
		this.setState({loadingCalls: true});
		axios.get(`${url}?auth=${this.props.token}`)
			.then(response => {
				const formDataArray = [];
				console.log(response.data);
				for( let id in response.data.await) {
					const newCallObject = {
						id: id,
						...response.data.await[id]
					};
					formDataArray.push(newCallObject);
				};
				const newArray = formDataArray.map(object => {
					let contactDataValues = [];
					for(let key in object) {
						if(key === 'email' || key === 'whatsapp' || key === 'vk'
							|| key === 'facebook' || key === 'skype') {
								contactDataValues.push(object[key]);
						};
					};
					const newObject = {
						id: object.id,
						name: object.name,
						gender: object.gender,
						location: `${object.country}, ${object.city}`,
						timezone: object.timezone,
						contactData: contactDataValues.join(', ')
					};
					return object = newObject;
				});
				console.log(newArray);
				this.setState({fetchedCalls: newArray, loadingCalls: false});
			}).catch(error => {
				console.log(error);
				this.setState({ loadingCalls: false });
			});
	};

	deleteCallHandler = (id) => {
		//Save the call to add it to the archive
		const callTOArchive = this.state.fetchedCalls.filter(call => call.id === id);
		console.log(callTOArchive);

		//Update Fetched Calls Array
		const newCallsArray = this.state.fetchedCalls.filter(call => call.id !== id);
		this.setState({fetchedCalls: newCallsArray});

		//Delete the call
		axios.delete(`https://portfolio-ccandpc.firebaseio.com/calls/await/${id}.json?auth=${this.props.token}`);

		//Post the call to the database
		axios.post(`https://portfolio-ccandpc.firebaseio.com/calls/archived.json?auth=${this.props.token}`, callTOArchive[0])
			.then(response => {
				alert(`${callTOArchive[0].name} was added to the archived node of the database`);
			}).catch(error => console.log(error.message));
	};

	

	render() {
		let calls;

		if(this.state.loadingCalls) calls = <Spinner />;
		else {
			calls = this.state.fetchedCalls.map(call => {
				return (
					<Card key={call.name}>
						<h2>{call.name}</h2>
						<p>Gender: {call.gender}</p>
						<p>Location: {call.location}</p>
						<p>Timezone: {call.timezone}</p>
						<p>Contact Data: {call.contactData}</p>
						<Button clicked={()=> this.deleteCallHandler(call.id)}>Done</Button>
					</Card>
				);
			});
		}
		return(
			<div>
				<h1>Calls</h1>
				{calls}
			</div>

		);
	};
};

const mapStateToProps = state => {
	return {
		token: state.token
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onFetchCalls: () => dispatch({ type: actions.AUTH_START })
	};
};
		
export default connect(mapStateToProps, mapDispatchToProps)(Calls);