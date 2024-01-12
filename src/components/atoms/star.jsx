import React from 'react';
import './star.scss';
import star from '../../assets/icons/star.svg';
import PropTypes from 'prop-types';

const Star = (props) => {
    return <img className={`star ${props.style}`} src={star} alt="étoile" />;
};

Star.propTypes = {
    style: PropTypes.string,
};

Star.defaultProps = {
    style: 'star--filled',
};

export default Star;
