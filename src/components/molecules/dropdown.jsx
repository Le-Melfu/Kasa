import React from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';
import { IoIosArrowUp } from 'react-icons/io';

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <h2>
                {props.title}
                <IoIosArrowUp />
            </h2>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Dropdown;
