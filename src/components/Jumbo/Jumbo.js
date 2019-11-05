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
				<div className='jumbo'>
					<h1 className='card-title'>Home Jumbotron</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<Button><Link to='/services'>Services</Link></Button>
					<Button><HashLink to="/#form">Schedule a call</HashLink></Button>
				</div>
				);
			break;
		case 'about':
			jumbo = (
				<div className='jumbo'>
					<h1>About Jumbotron</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
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