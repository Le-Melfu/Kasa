import React from 'react';
import PropTypes from 'prop-types';
import './starrating.scss';
import Star from '../atoms/star';

const StarRating = (props) => {
    const rating = Number(props.rating);
    const starsFilled = Array.from({ length: rating }, (_, index) => (
        <Star style="star--filed" key={index} />
    ));
    const starGreyed = Array.from({ length: 5 - rating }, (_, index) => (
        <Star style="star--greyed" key={index} />
    ));

    return (
        <div className="star-rating">
            {starsFilled}
            {starGreyed}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.string,
};

export default StarRating;
