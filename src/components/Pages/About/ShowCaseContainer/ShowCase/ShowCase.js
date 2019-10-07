import React from 'react';
import Button from '../../../../Reusables/Button/Button';

const ShowCase = (props) => (
	<div>
		<img src={props.picture} alt={props.screenshotDesc}/>
		<p>{props.text}</p>
		<Button><a href={props.link}>See Live</a></Button>
	</div>
	);
export default ShowCase;