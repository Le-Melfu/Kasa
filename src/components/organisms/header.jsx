import React from 'react';
import './header.scss';
import NavBar from '../molecules/navbar';
import Logo from '../atoms/logo';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <NavBar />
        </div>
    );
};

export default Header;
