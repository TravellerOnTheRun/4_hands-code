import React from 'react';
import './Backdrop.css';

const Backdrop = props => (
    props.backdrop ? <div className='backdrop' onClick={props.clicked}></div>: null
);

export default Backdrop;