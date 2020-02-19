import React from 'react';
import Button from '../../../../Reusables/Button/Button';
import './BtnContainer.css';

const BtnContainer = (props) =>
	{
		return (
			<div className='list_of_services'>
				<div className='one_block_services'>
					<Button ownStyle='service_button Button' clicked={() =>props.textChanger('Custom Design')}>Индивидуальный дизайн</Button>
					<Button ownStyle='service_button Button' clicked={() =>props.textChanger('Content Creation')}>Создание контента</Button>
					<Button ownStyle='service_button Button' clicked={() =>props.textChanger('Copywriting')}>Копирайтинг</Button>
					<Button ownStyle='service_button Button' clicked={() =>props.textChanger('SEO')}>SEO</Button>
				</div>				
				<div className='two_block_services'>
					<Button ownStyle='service_button Button' clicked={() =>props.textChanger('Project Management')}>Менеджмент проекта</Button>
					<Button ownStyle='service_button Button' clicked={() =>props.textChanger('Testing and Training')}>Тестирование и обучение</Button>
					<Button ownStyle='service_button Button' clicked={() =>props.textChanger('Consultations')}>Консультации</Button>
				</div>
			</div>

		);
	}
export default BtnContainer;