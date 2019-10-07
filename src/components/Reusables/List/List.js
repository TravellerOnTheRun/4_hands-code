import React from 'react';
import './List.css';

const List = (props) => (
		<ul className={props.style}>{props.arrayOfElements.map(element =>
				{
					return <li>{element}</li>
				})}
		</ul>
	);
	

export default List;