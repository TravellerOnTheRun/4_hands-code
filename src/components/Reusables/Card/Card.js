import React from 'react';
import './Card.css';

const Card = (props) => <div className={props.typeOfCard}>{props.children}</div>
export default Card;