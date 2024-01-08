import React from 'react';
import './dropdownlistabout.scss';
import PropTypes from 'prop-types';
import Dropdown from '../molecules/dropdown';

const Dropdownabout = () => {
    return (
        <div className="dropdown__about">
            <Dropdown title="Fiabilité" />
            <Dropdown title="Respect" />
            <Dropdown title="Service" />
            <Dropdown title="Sécurité" />
        </div>
    );
};

Dropdownabout.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Dropdownabout;
