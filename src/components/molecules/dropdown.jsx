import React, { useState } from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <div className="dropdown" onClick={() => setIsOpen(false)}>
            <h2>
                {props.title}
                <IoIosArrowDown />
            </h2>
        </div>
    ) : (
        <div className="dropdown" onClick={() => setIsOpen(true)}>
            <h2>
                {props.title}
                <IoIosArrowUp />
            </h2>
            <p className="droped">{props.content}</p>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};
export default Dropdown;
