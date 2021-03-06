import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) =>  {
	return (
		<nav className='nav'>
			<ul>
				{props.navLinks.map(navLink => {
					return (
						<li key={navLink.label}>
							<Link
								className={navLink.className} 
								to={navLink.to}>{navLink.label}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);

};

export default Nav;