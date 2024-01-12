import React from 'react';
import PropTypes from 'prop-types';
import './dropdown-content.scss';

const DDContent = (props) => {
    if (props.content instanceof Array) {
        return (
            <ul className="dropdown-content">
                {props.content.map((content, index) => {
                    return (
                        <li className="dropdown-content__list" key={index}>
                            {content}
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return <p className="dropdown-content">{props.content}</p>;
    }
};

DDContent.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default DDContent;
