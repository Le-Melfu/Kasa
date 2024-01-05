import React from 'react';
import PropTypes from 'prop-types';
import './roundedpicture.scss';

const RoundedImage = (props) => {
    return (
        <div>
            <img
                src={props.src}
                alt={props.alt}
                height={props.height}
                className="rounded"
            ></img>
        </div>
    );
};

RoundedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.number,
};

RoundedImage.defaultProps = {
    src: '',
    alt: '',
    height: 223,
};

export default RoundedImage;
