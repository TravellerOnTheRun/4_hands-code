import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';

const MobileNav = props => {
    return (
        props.mobileNav ?
        <nav className='mobile-nav'>
            <ul className="mobile-nav__items">
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
        :null
    );
};

export default MobileNav;