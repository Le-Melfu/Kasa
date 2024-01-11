import React from 'react';
import PropTypes from 'prop-types';
import './tag.scss';

const Tag = (props) => {
    return <p className="tag">{props.content}</p>;
};

Tag.propTypes = {
    content: PropTypes.string,
};

export default Tag;
