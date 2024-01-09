import React from 'react';
import './header.scss';
import './footer.scss';
import Logo from '../atoms/logo';

const Footer = () => {
    return (
        <div className="footer">
            <Logo />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;
