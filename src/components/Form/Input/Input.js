import React from 'react';
import styles from './Input.module.css';

const Input = ( props ) => {
	let inputElement = null;
	let star = null;
	let validationError = null;

	const inputStyles = [styles.InputElement];

	if(props.invalid && props.shouldValidate && props.touched) {
		inputStyles.push(styles.Invalid);
		validationError = <p>Please enter your {props.label}</p>;
	};
	if(props.elementConfig.placeholder) {
		if(	props.elementConfig.placeholder.toLowerCase().includes('skype') ||
			props.elementConfig.placeholder.toLowerCase().includes('e-mail')||
			props.elementConfig.placeholder.toLowerCase().includes('whatsapp')||
			props.elementConfig.placeholder.toLowerCase().includes('facebook')||
			props.elementConfig.placeholder.toLowerCase().includes('vk')) {
				star = '*';
			}
	};

	switch(props.elementType) {
		case('input'):
			inputElement = <input 
								className={inputStyles.join(' ')} 
								{...props.elementConfig} 
								value={props.value}
								onChange={props.changed}/>;
			break;
		case('textarea'):
			inputElement = <textarea 
								className={inputStyles.join(' ')} 
								{...props.elementConfig} 
								value={props.value}
								onChange={props.changed}/>
			break;
		case('select'):
			inputElement = (
				<select 
					className={inputStyles.join(' ')} 
					value={props.value}
					onChange={props.changed}>
					{ props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = <input 
								className={inputStyles} 
								{...props.elementConfig} 
								value={props.value}
								onChange={props.changed}/>
	};

	return (
		<div className={styles.Input}>
			<label className={styles.Label}>{props.label}{star}:</label>
			{inputElement}
			{validationError}
		</div>
	);
};
export default Input;


// className={styles.smth} -FOR LILY
