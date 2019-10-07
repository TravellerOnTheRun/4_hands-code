import React from 'react';

const DemoText = (props) =>
	{
		let textbox = null;

		switch(props.part)
			{
				case 'Custom Design':
					textbox = (
						<div>
							<h2>{props.part}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						);
					break;
				case 'Content Creation':
					textbox = (
						<div>
							<h2>{props.part}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						);
					break;
				case 'Copywriting':
					textbox = (
						<div>
							<h2>{props.part}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						);
					break;
				case 'SEO':
					textbox = (
						<div>
							<h2>{props.part}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						);
					break;
				case 'Project Management':
					textbox = (
						<div>
							<h2>{props.part}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						);
					break;
				case 'Testing and Training':
					textbox = (
						<div>
							<h2>{props.part}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						);
					break;
				case 'Consultations':
					textbox = (
						<div>						
							<h2>{props.part}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						);
					break;
				default:
					textbox = (
						<div>
							<h2>What makes a website?</h2>
							<p>Something like: "You buy service, not a comodity"</p>
						</div>
						);

			}


		return textbox;
	}

export default DemoText;