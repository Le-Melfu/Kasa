import React from 'react';
import './header.scss';
import logo from '../../assets/images/LOGO.svg';
import NavBar from '../molecules/navbar';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo Kasa"></img>
            <NavBar />
        </div>
    );
};

export default Header;
