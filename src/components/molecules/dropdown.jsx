import React, { useState } from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';
import { IoIosArrowUp } from 'react-icons/io';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="dropdown"
            onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}
        >
            <h2>
                {props.title}
                {isOpen ? (
                    <IoIosArrowUp className="arrow" />
                ) : (
                    <IoIosArrowUp className="arrow rotate" />
                )}
            </h2>
            <div
                className={
                    isOpen ? 'dropdown__content open' : 'dropdown__content'
                }
            >
                <p>{props.content}</p>
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};
export default Dropdown;
