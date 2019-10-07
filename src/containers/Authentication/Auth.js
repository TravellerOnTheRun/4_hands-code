import React, { Component } from 'react';
import { authFormData } from '../../components/Form/formData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Input from '../../components/Form/Input/Input';
import Button from '../../components/Reusables/Button/Button';
import Spinner from '../../components/Reusables/Spinner/Spinner';

import './Auth.css';



class Auth extends Component {
	state = {
		controls: {
			...authFormData
		},
		loading: false,
		error: null
	};
		checkValidity(value, rules) {
		let isValid = true;
		if (!rules) {
				return true;
		};
			
		if (rules.required) {
				isValid = value.trim() !== '' && isValid;
		};

		if (rules.minLength) {
				isValid = value.length >= rules.minLength && isValid
		};

		if (rules.isEmail) {
				const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
				isValid = pattern.test(value) && isValid
		};

		if (rules.isNumeric) {
				const pattern = /^\d+$/;
				isValid = pattern.test(value) && isValid
		};

		return isValid;
	};

	inputChangedHandler = (event, controlName) => {
		const updatedControls = { 
				...this.state.controls,
				[controlName]: {
						...this.state.controls[controlName],
						value: event.target.value,
						valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
						touched: true
				}
		};
		this.setState({controls: updatedControls});
	};

	submitAuth = (event) => {
		event.preventDefault();
		this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
		this.props.history.push('/admin-4h_ands');
	};

	render() {
		const formElementsArray = [];
		for ( let key in this.state.controls ) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		};
		let form = formElementsArray.map(formElement => (
			<Input
				key={formElement.id}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				changed={( event ) => this.inputChangedHandler( event, formElement.id )}
				label={formElement.config.label} />

		));

		if(this.state.loading) form = <Spinner />;

		return (
			<div className='Auth'> 
				<form>
					{ form }
					<Button clicked={this.submitAuth}>Sign In</Button>
				</form>
			</div>
		);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password))
	};
};

export default connect(null, mapDispatchToProps)(Auth);