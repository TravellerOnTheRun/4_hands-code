import React from 'react';
import styles from './SideDrawer.css';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Nav from '../Nav';
import Logo from '../Logo/Logo';

const SideDrawer = props => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
	if(props.open) {
		attachedClasses = [styles.SideDrawer, styles.Open]
	};
    return (
        <React.Fragment>
            <Backdrop backdrop={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <Logo />
                <Nav sideDrawer navLinks={props.navLinks}/>
            </div>
        </React.Fragment>
    );
};

export default SideDrawer;