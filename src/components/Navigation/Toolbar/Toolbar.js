import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css'

const toolbar = (props) => (
    <header className='Toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className='Logo1'>
            <Logo />
        </div>
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;