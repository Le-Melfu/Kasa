import React from 'react';
import PropTypes from 'prop-types';
import './tag-section.scss';
import Tag from '../atoms/tag';

const TagSection = (props) => {
    return (
        <div className="tag-section">
            {props.content.map((content, index) => {
                return <Tag key={index} content={content} />;
            })}
        </div>
    );
};

TagSection.propTypes = {
    content: PropTypes.array.isRequired,
};

export default TagSection;
