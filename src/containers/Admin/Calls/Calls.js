import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Card from '../../../components/Reusables/Card/Card';
import Spinner from '../../../components/Reusables/Spinner/Spinner';
import Button from '../../../components/Reusables/Button/Button';
import NewOrder from '../../../components/NewOrder/NewOrder';


class Calls extends Component {

	state = {
		fetchedCalls: [],
		loadingCalls: false,
		isNewOrder: false,
		newOrderObjectData: {}
	};

	componentDidMount(){
		this.fetchCallsHandler();
	};

	fetchCallsHandler = () => {
		this.setState({ loadingCalls: true });
		axios.get('http://localhost:8080/admin/calls', {
			headers: {
				Authorization: this.props.token
			}
		})
			.then(response => {
				const fetchedCalls = response.data.calls;
				this.setState({ fetchedCalls: fetchedCalls, loadingCalls: false });
			}).catch(error => {
				console.log(error);
				this.setState({ loadingCalls: false });
			});
	};

	deleteCallHandler = (id) => {
		//Update Fetched Calls Array
		const newCallsArray = this.state.fetchedCalls.filter(call => call._id !== id);
		this.setState({fetchedCalls: newCallsArray});

		//Delete the call
		axios.delete(`http://localhost:8080/admin/call/${id}`, {
			headers: {
				Authorization: this.props.token
			}
		})
			.then(result => {
				console.log(result);
			});
	};

	createOrder = (id) => {
		//create an order from the call data
		const callCreationData = this.state.fetchedCalls.filter(call => call._id === id)[0];
		console.log(callCreationData);
		this.setState({ isNewOrder: true, newOrderObjectData: callCreationData });
	};

	abortNewOrder = () => {
		this.setState({ isNewOrder: false });
	};

	
	render() {
		let calls;
		let newOrder = null;

		if(this.state.isNewOrder) {
			newOrder = (
				<NewOrder 
					abort={this.abortNewOrder} 
					newOrderObjectData={this.state.newOrderObjectData}
					deleteCallHandler={this.deleteCallHandler}/>
			);
		};

		if(this.state.loadingCalls) calls = <Spinner />;
		else {
			calls = this.state.fetchedCalls.map(call => {
				return (
					<Card key={call._id}>
						<h2>{call.name}</h2>
						<p>Location: {call.location}</p>
						<p>Timezone: {call.timezone}</p>
						<p>Contact Data: {call.contactData}</p>
						<Button clicked={()=> this.deleteCallHandler(call._id)}>Delete</Button>
						<Button clicked={()=> this.createOrder(call._id)}>Create an Order</Button>
					</Card>
				);
			});
		}
		return(
			<div className='Calls'>
				<h1>Calls</h1>
				{ calls }
				{ newOrder}
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