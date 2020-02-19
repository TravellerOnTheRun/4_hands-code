import React from 'react';
import logo from '../../../assets/Images/Logo-01.png';
import './Logo.css';


const Logo = (props) => (
		<div className='logo'>
			<img src={logo} alt="MyBurger"/>
		</div>
	);

export default Logo;