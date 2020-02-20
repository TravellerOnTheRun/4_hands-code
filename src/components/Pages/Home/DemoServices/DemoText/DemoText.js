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
					<h2 className='intro_demo-services--header'>Из чего состоит вебсайт?</h2>
					<p className='intro_demo-services--text'>За что вы платите, заказывая у нас вебсайт? Хотим вас предупредить - в первую очередь, вы платите за услугу,
					а не покупаете товар. И набор услуг, который понадобится индивидуален. Так что мы предлагаем вам ознакомиться
					со всем, что мы можем сделать для вас, и выбрать, какие именно услуги вам необходимы, чтобы оживить ваш бизнес
					на страницах интернета. </p>
				</div>
			);

	};


	return textbox;
};

export default DemoText;