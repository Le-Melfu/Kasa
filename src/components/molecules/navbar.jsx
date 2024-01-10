import React from 'react';
import Link from '../atoms/link';
import './navbar.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" name="Accueil" className="link" />
            <Link to="/about" name="À Propos" className="link" />
        </nav>
    );
};

export default NavBar;
