import React from 'react';
import './header.scss';
import logo from '../../assets/images/LOGO.svg';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;
