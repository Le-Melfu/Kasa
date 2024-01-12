import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './slideshow.scss';
import '../../assets/index.scss';
import slideshowArrow from '../../assets/icons/slideshow-arrow.svg';

const Slideshow = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % props.content.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide - 1 + props.content.length) % props.content.length,
        );
    };
    return (
        <div className="slideshow">
            <img
                src={slideshowArrow}
                alt="arrow"
                className="arrow-left"
                onClick={prevSlide}
            />
            <div className="slideshow__pictures">
                {props.content.map((content, index) => {
                    return (
                        <img
                            key={index}
                            src={content}
                            alt={`${props.alt} ${index + 1}`}
                            className={
                                index === currentSlide
                                    ? 'slideshow__picture selected'
                                    : 'slideshow__picture'
                            }
                        />
                    );
                })}
                <div className="slideshow__listnumber">
                    <p>{`${currentSlide + 1}/${props.content.length}`}</p>
                </div>
            </div>
            <img
                src={slideshowArrow}
                alt="arrow"
                className="arrow-right"
                onClick={nextSlide}
            />
        </div>
    );
};

Slideshow.propTypes = {
    content: PropTypes.array,
    alt: PropTypes.string.isRequired,
};

export default Slideshow;
