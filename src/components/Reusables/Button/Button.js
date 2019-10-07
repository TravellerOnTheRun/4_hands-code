import React from 'react';
import './Button.css';

const Button = (props) => <button className={props.ownStyle} onClick={props.clicked} disabled={props.disabled}>{props.children}</button>

export default Button;