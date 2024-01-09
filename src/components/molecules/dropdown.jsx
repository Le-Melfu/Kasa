import React, { useState } from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="dropdown"
            onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}
        >
            <h2>
                {props.title}
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h2>
            <div className="dropdown__content">
                {isOpen ? (
                    <p className="dropdown__content--uncollapsed">
                        {props.content}
                    </p>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};
export default Dropdown;
