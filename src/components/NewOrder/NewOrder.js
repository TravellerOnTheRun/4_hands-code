import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { newOrderData } from'../../components/Form/formData';

import Card from '../Reusables/Card/Card';
import Input from '../../components/Form/Input/Input';
import Button from '../Reusables/Button/Button';



const NewOrder = props => {

    const [ form, setForm ] = useState(newOrderData);

    const [ idOfTheCall ] = useState(props.newOrderObjectData._id || null);

    const { newOrderObjectData, } = props;
    

    useEffect(() => {
        const updatedForm = { ...form };
        const arrayOfnewOrderObjectDataKeys = Object.keys(newOrderObjectData);

        for( let key in updatedForm) {
            arrayOfnewOrderObjectDataKeys.forEach(orderKey => {
                if(key === orderKey) {
                    updatedForm[key].value = newOrderObjectData[key];
                }
            })
        };
        setForm(updatedForm);
    }, [newOrderObjectData, form]);

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
        axios.post('http://localhost:8080/admin/order', formData, {
            headers: {
				Authorization: props.token
			}
        })
            .then( response => {
                if(props.orders) {
                    props.creatingOrder();
                } else {
                    props.deleteCallHandler(idOfTheCall);
                    props.abort();
                }
                alert(`New Order: ${response.order.nameOfTheOrder} has been published`);
            })
            .catch(err => console.log(err));
    };

    const goBack = () => {
       props.higherProps.history.goBack();
       props.creatingOrder();
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
                { 
                    props.orders 
                    ? <Button clicked={goBack}>Cancel</Button>
                    : <Button clicked={props.abort}>Cancel</Button>
                }
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