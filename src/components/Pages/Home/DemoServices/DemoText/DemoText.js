import React from 'react';
import './DemoText.css';

const DemoText = (props) => {
	let textbox = null;

	switch(props.part) {
		case 'Custom Design':
			textbox = (
				<div className='demo_services--buttons'>
					<h2>{props.part}</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				);
			break;
		case 'Content Creation':
			textbox = (
				<div  className='demo_services--buttons'>
					<h2>{props.part}</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				);
			break;
		case 'Copywriting':
			textbox = (
				<div  className='demo_services--buttons'>
					<h2>{props.part}</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				);
			break;
		case 'SEO':
			textbox = (
				<div  className='demo_services--buttons'>
					<h2>{props.part}</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				);
			break;
		case 'Project Management':
			textbox = (
				<div  className='demo_services--buttons'>
					<h2>{props.part}</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				);
			break;
		case 'Testing and Training':
			textbox = (
				<div  className='demo_services--buttons'>
					<h2>{props.part}</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				);
			break;
		case 'Consultations':
			textbox = (
				<div  className='demo_services--buttons'>						
					<h2>{props.part}</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				);
			break;
		default:
			textbox = (
				<div className='intro_demo-services'>
					<h2 className='intro_demo-services--header'>Что такое вебсайт?</h2>
					<p className='intro_demo-services--text'>Когда вы напишите нам, что хотели бы заказать сайт, мы хотим, чтобы вы знали - вы покупаете услугу, 
					а не товар. Что все это значит? Мы имеем в виду, что заказать сайт - это не то же самое, что купить машину. Это не нечто цельное, заранее 
					готовое. Вебсайт - абсолютно индивидуальная вещь. Вебсайт - это интерактивная реклама вас, вашего бизнеса, вашей огранизации. Мы не можем 
					заранее сказать вам, сколько вам будет стоить наша работа.
					Единственный способ узнать - позвонить нам и рассказать о ваших желаниях и ожиданиях. 
					Мы красочно распишем вам процесс работы и выведем сумму. </p>
				</div>
			);

	};


	return textbox;
};

export default DemoText;