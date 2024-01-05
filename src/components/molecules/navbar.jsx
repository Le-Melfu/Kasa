import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">
                Accueil
            </Link>
            <Link to="/about" className="link">
                A Propos
            </Link>
        </nav>
    );
};

export default NavBar;
