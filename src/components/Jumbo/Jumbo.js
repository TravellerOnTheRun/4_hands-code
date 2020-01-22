import React from 'react';
import Button from '../Reusables/Button/Button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Jumbo.css';
// import image from '../../assets/Pictures/Jumbo_services.jpg';



const Jumbo = (props) => {
	//approximate structure of jumbotron
	let jumbo = null;
	switch(props.type) {
		case 'home':
			jumbo = (
				<div className='jumbo home-jumbo'>
					{/* <Button id='services-button'><Link to='/services'>Services</Link></Button>
					<Button className='schedule-a-call-button'><HashLink to="/#form">Schedule a call</HashLink></Button> */}
				</div>
				);
			break;
		case 'about':
			jumbo = (
				<div className='jumbo'>
					<h1>About Jumbotron</h1>
					<p>Итак, вы решили, что вам нужен вебсайт. У вас малый бизнес? Средний? Вы руководите некомерческой огранизацией? 
						Может, у вас уже есть идея того, чего вы хотите от своего сайта, может уже написаны тексты. 
						А может вы ничего не подготовили и знаете только одно - вам нужен сайт. В любом из этих случаев вы обратились по адресу. 
                        В наше время у вас нет бизнеса, если вашего сайта нет в интернете. И это здорово, ведь вы позволяете людям со всего мира 
						пользоваться вашими услугами, покупать ваши товары. Спасибо вам за это. А наша работа - помочь вам эти услуши и товары донести 
						до людей с максимальным комфортом.</p>
					<Button><HashLink to='/about#form'>Schedule an E-meeting</HashLink></Button>
				</div>
				);
			break;
		case 'services':
			jumbo = (
				<div className='jumbot'>
					{/*<image className='pic' src={image}/>*/}
					<div className='textbox'>
						<h1 className='card-title'>Итак, вы решили, что вам нужен вебсайт.</h1>
					<p className='text'>И вот вы заходите в интернет, чтобы решить, где его взять и сколько за это платить. 
					Но почему-то везде разные цены. Почему? Как люди вообще высчитывают, сколько денег брать за услуги веб-разработчика? 
					Есть ли здесь какая-то схема?</p>
					</div>
					<Button ownStyle='Button'><HashLink className='btn' to='/services#form'>Назначить встречу и выяснить</HashLink></Button>
					<Button ownStyle='Button'><HashLink className='btn' to='/services#read'>Читать дальше</HashLink></Button>
				</div>
				);
			break;

		default:
			jumbo = (
				<div className='jumboContact'>
					<h1 className='jumboContactTitle'>Время услышать друг друга!</h1>
					<p>Итак, если вы решили, что вам нужен вебсайт и заказать его вы хотите именно у нас; если у вас есть к нам вопросы - 
					самое время заполнить форму и связаться с нами для первой беседы. Мы с нетерпением ждем вашей заявки!</p>
					<Button>Something</Button>
				</div>
				);
				
	};
	return (
			<div>
				{jumbo}
			</div>
		);
};
	


export default Jumbo;