import React, { useState } from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';
import Arrow from '../atoms/arrow';
import DDContent from '../atoms/dropdown-content';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="dropdown"
            onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}
        >
            <h2>
                {props.title}
                <Arrow open={isOpen} />
            </h2>
            <div
                className={
                    isOpen ? 'dropdown__content open' : 'dropdown__content'
                }
            >
                <DDContent content={props.content} />
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default Dropdown;
