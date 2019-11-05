import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from './Input/Input';
import { formData } from './formData';
import Button from '../Reusables/Button/Button';
import axios from '../../axios-forms.js';
import Spinner from '../Reusables/Spinner/Spinner';
import './Form.css';

class Form extends Component {
	state = {
			form: formData,
			loading: false,
			formIsValid: false,
			optionals: {
				email: '',
				whatsapp: '',
				vk: '',
				facebook: '',
				skype: ''
			}
	};

	checkOptionalSetFormValid = () => {
		let isValid = false;
		const emptinessArrayCheck = [];
		for(let optional in this.state.optionals) {
			if(this.state.optionals[optional].trim() !== '') {
				emptinessArrayCheck.push(this.state.optionals[optional]);
			};
		};
		console.log(emptinessArrayCheck);
		if( emptinessArrayCheck.length >= 1) {
			isValid = true;
		};
		return isValid;
	};

	checkValidity = ( value, rules) => {
		let isValid = false;

		if(rules.isOptions || 
			!rules.required || 
			(rules.required && rules.optional)){
				return true;
		};

		if(rules.required && !rules.optional) {
				isValid = value.trim() !== '';
		};
		console.log(`[checkValidity] isValid = ${isValid}`);
		return isValid;
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.form};
		const updatedFormElement = {...updatedForm[inputIdentifier]};
		if(!updatedFormElement.validation) {
			updatedFormElement.validation = {
				isOptions: true
			}
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedForm[inputIdentifier] = updatedFormElement;

		//Variables for form validations check
		let formIsValid = true;
		let optionalsAreFilledIn = this.checkOptionalSetFormValid();

		//Setting the value of optionals state
		if( updatedFormElement.validation.required && updatedFormElement.validation.optional) {
			const newObject = {
				...this.state.optionals,
				[inputIdentifier] : event.target.value
			};
			this.setState({optionals: newObject});
		};

		for(let inputIdentifier in updatedForm) {
				formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
		};
		this.setState({form: updatedForm, formIsValid: formIsValid && optionalsAreFilledIn});
	};

	submitTheForm = (event) => {
		event.preventDefault();
		this.setState({loading:true});
		const formData = {};
		
		for (let formElementIdentifier in this.state.form) {
			//Getting rid of empty input fields
			if(this.state.form[formElementIdentifier].value.trim() !== '') {
				formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
			};	
		};

		axios.post('/calls/await.json', formData)
			.then(response => {
				this.setState({loading:false})
				this.props.history.push('/')
			}).catch(error => console.log(error));
	};
		
	render() {
		let displayComponent = null;

		const formElementsArray = [];
		for(let key in this.state.form) {
			formElementsArray.push({
				id: key,
				config: this.state.form[key]
			})
		};

		if(this.state.loading) {
			displayComponent = <Spinner />
		} else {
			displayComponent = (
				<div className='form'>
					<form onSubmit={this.submitTheForm}>
						{formElementsArray.map(formElement => (
							<Input
								key={formElement.id}
								elementType={formElement.config.elementType}
								elementConfig={formElement.config.elementConfig}
								value={formElement.config.value}
								changed={(event) => this.inputChangedHandler(event, formElement.id)}
								label={formElement.config.label}
								invalid={!formElement.config.valid}
								shouldValidate={formElement.config.validation}
								touched={formElement.config.touched}/>
							))}
						*Выберите подходящий вам способ связи
						<br/> 
						<Button disabled={!this.state.formIsValid} className='btn' ownStyle='btnForm'>Отправить</Button>
					</form>
				</div>
			);
		};

		return displayComponent;
	};
};

const mapStateToProps = state => {
	return {
		token: state.token
	};
};

export default withRouter(connect(mapStateToProps)(Form));