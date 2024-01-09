import React from 'react';
import './banner.scss';
import PropTypes from 'prop-types';

const Banner = (props) => {
    return (
        <div className="banner">
            <img src={props.image} alt={props.catch} />
            <h1>{props.catch}</h1>
        </div>
    );
};

Banner.propTypes = {
    catch: PropTypes.string,
    image: PropTypes.string,
};
export default Banner;
