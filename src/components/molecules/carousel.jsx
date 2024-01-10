import React from 'react';
import PropTypes from 'prop-types';
import './carousel.scss';
import Arrow from '../atoms/arrow';

const Carousel = (props) => {
    if (props.content instanceof Array) {
        return (
            <div className="carousel">
                <Arrow direction="left" />
                <div className="carousel__picture">
                    {props.content.map((content) => {
                        return <img key={content} src={content} alt="" />;
                    })}
                </div>
                <Arrow direction="right" />
            </div>
        );
    } else {
        return (
            <div className="carousel__picture">
                <img src={props.content} alt="" />
            </div>
        );
    }
};

Carousel.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Carousel;
