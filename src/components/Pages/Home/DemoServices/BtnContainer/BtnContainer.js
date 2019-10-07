import React from 'react';
import Button from '../../../../Reusables/Button/Button';

const BtnContainer = (props) =>
	{
		return (
			<div>
				<Button clicked={() =>props.textChanger('Custom Design')}>Custom Design</Button>
				<Button clicked={() =>props.textChanger('Content Creation')}>Content Creation</Button>
				<Button clicked={() =>props.textChanger('Copywriting')}>Copywriting</Button>
				<Button clicked={() =>props.textChanger('SEO')}>SEO</Button>
				<Button clicked={() =>props.textChanger('Project Management')}>Project Management</Button>
				<Button clicked={() =>props.textChanger('Testing and Training')}>Testing and Training</Button>
				<Button clicked={() =>props.textChanger('Consultations')}>Consultations</Button>
			</div>

		);
	}
export default BtnContainer;