import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { newOrderData } from'../../components/Form/formData';

import Card from '../Reusables/Card/Card';
import Input from '../../components/Form/Input/Input';
import Button from '../Reusables/Button/Button';



const NewOrder = props => {

    const [ form, setForm ] = useState(newOrderData);

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = { ...form };
        const updatedFormElement = { ...updatedForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;
        setForm(updatedForm);
    };

    const submitTheOrder = (event) => {
        event.preventDefault();
        const formData = {};

        for( let element in form) {
            formData[element] = form[element].value;
        };
        axios.post('https://portfolio-ccandpc.firebaseio.com/orders/current.json?auth=' + props.token, formData)
            .then( response => {
                props.creatingOrder();
                alert('New Order has been published');
            });
    };

    let formElementsArray = [];
    for(let key in form) {
        formElementsArray.push({
            id: key,
            config: form[key]
        })
    };

    return (
        <Card>
            <form onSubmit={submitTheOrder}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => inputChangedHandler(event, formElement.id)}
                        label={formElement.config.label} />
                ))}
                <Button>Submit</Button>
            </form>
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(NewOrder);