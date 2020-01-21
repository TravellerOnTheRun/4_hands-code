import React, { useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Nav/Toolbar/Toolbar';
import SideDrawer from '../../components/Nav/SideDrawer/SideDrawer';

const Layout = props => {
	const [showSideDrawer, setShowSideDrawer ] = useState(false);

	const sideDrawerClosed = () => {
		setShowSideDrawer(false);
	};

	const toggleSideDrawer = () => {
		setShowSideDrawer(!showSideDrawer);
	};
		return(
			<React.Fragment>
				<Toolbar
                    navLinks={props.navLinks}
					toggle={toggleSideDrawer}
					isAuth={props.isAuthenticated} 
				/>
                <SideDrawer 
                    navLinks={props.navLinks}
					open={showSideDrawer} 
					closed={sideDrawerClosed}
				/>
				<main className=''>
					{props.children}
				</main>
			</React.Fragment>
		);
			
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null
	};
};

export default connect(mapStateToProps)(Layout);