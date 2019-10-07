import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Reusables/Button/Button';

const DemoAbout = () =>
	{
		return (
			<React.Fragment>
				<h1>Demo About</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<Button><Link to='/about/'>About Us</Link></Button>
			</React.Fragment>
			);
	}
export default DemoAbout;