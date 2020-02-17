import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Reusables/Button/Button';
import './DemoAbout.css';

const DemoAbout = () => {
	return (
		<React.Fragment>
			<div className='demo_about'>
				<p className='demo_about_text'>Итак, вы решили, что вам нужен вебсайт. У вас малый бизнес? Средний? Вы руководите некомерческой огранизацией? 
					Может, у вас уже есть идея того, чего вы хотите от своего сайта, может уже написаны тексты.
					А может вы ничего не подготовили и знаете только одно - вам нужен сайт. В любом из этих случаев вы обратились по адресу. 
					В наше время у вас нет бизнеса, если вашего сайта нет в интернете. И это здорово, ведь вы позволяете людям со всего мира 
					пользоваться вашими услугами, покупать ваши товары. Спасибо вам за это. 
					А наша работа - помочь вам эти услуши и товары донести до людей с максимальным комфортом. 
				</p>
			<Button ownStyle='demo_about--button'><Link to='/about/'>About Us</Link></Button>
			</div>
		</React.Fragment>
	);
};

export default DemoAbout;