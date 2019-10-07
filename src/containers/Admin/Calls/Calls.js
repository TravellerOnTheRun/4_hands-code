import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Card from '../../../components/Reusables/Card/Card';
import Spinner from '../../../components/Reusables/Spinner/Spinner';


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
					formDataArray.push({...response.data.await[id]});
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