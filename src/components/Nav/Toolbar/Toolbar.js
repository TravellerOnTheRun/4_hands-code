import React from 'react';

import Nav from '../Nav';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../Logo/Logo';

const Toolbar = ( props ) => (
    <header>
        <DrawerToggle className='drawerToggle'/>
        <Logo/> 
        <Nav navLinks={props.navLinks}/>
    </header>
);

export default Toolbar;