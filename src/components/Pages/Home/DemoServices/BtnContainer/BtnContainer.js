import React from 'react';
import Button from '../../../../Reusables/Button/Button';

const BtnContainer = (props) =>
	{
		return (
			<div>
				<Button clicked={() =>props.textChanger('Custom Design')}>Индивидуальный дизайн</Button>
				<Button clicked={() =>props.textChanger('Content Creation')}>Создание контента</Button>
				<Button clicked={() =>props.textChanger('Copywriting')}>Копирайтинг</Button>
				<Button clicked={() =>props.textChanger('SEO')}>SEO</Button>
				<Button clicked={() =>props.textChanger('Project Management')}>Менеджмент проекта</Button>
				<Button clicked={() =>props.textChanger('Testing and Training')}>Тестирование и обучение</Button>
				<Button clicked={() =>props.textChanger('Consultations')}>Консультации</Button>
			</div>

		);
	}
export default BtnContainer;