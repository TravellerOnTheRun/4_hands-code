import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newClientData } from '../Form/formData';
import axios from 'axios';

import Input from '../Form/Input/Input';
import Card from '../Reusables/Card/Card';
import Button from '../Reusables/Button/Button';

const NewClient = props => {
    const [ form, setForm ] = useState(newClientData);

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = { ...form };
        const updatedFormElement = { ...updatedForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;
        console.log(updatedForm);
        setForm(updatedForm);
    };

    const submitTheClient = (event) => {
        event.preventDefault();
        const formData = {};

        for( let element in form) {
            formData[element] = form[element].value;
        };
        axios.post('https://portfolio-ccandpc.firebaseio.com/clients.json?auth=' + props.token, formData)
            .then( response => {
                props.toggleClientMaker();
                alert('New Client has been added');
            });
    };

    const goBack = () => {
       props.ordersProps.history.goBack();
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
            <form onSubmit={submitTheClient}>
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
            <Button clicked={goBack}>Cancel</Button>
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        token: state.token
    };
};


export default connect(mapStateToProps)(NewClient);