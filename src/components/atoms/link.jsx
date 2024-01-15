import React from 'react';
import './link.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Link = (props) => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };
    return (
        <a href={props.to} className={`link ${isActive(props.to)}`}>
            {props.name}
        </a>
    );
};

Link.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

Link.defaultProps = {
    to: '/',
    name: 'Accueil',
};
export default Link;
