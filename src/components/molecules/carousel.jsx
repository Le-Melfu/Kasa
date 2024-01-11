import React from 'react';
import PropTypes from 'prop-types';
import './carousel.scss';
import Slideshow from './slideshow';

const Carousel = (props) => {
    if (props.content.length > 1) {
        return (
            <div className="carousel">
                <Slideshow content={props.content} alt={props.alt} />
            </div>
        );
    } else {
        return (
            <div className="carousel">
                <img src={props.content} alt={props.alt} />
            </div>
        );
    }
};

Carousel.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    alt: PropTypes.string.isRequired,
};

export default Carousel;
