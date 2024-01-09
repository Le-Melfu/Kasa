import React from 'react';
import arrow from '../../assets/icons/arrow_back_ios-24px 2.svg';
import './arrow.scss';
import PropTypes from 'prop-types';

const Arrow = (props) => {
    const className = props.open ? 'arrow rotate' : 'arrow';
    return (
        <div className={className}>
            <img src={arrow} alt="arrow" />
        </div>
    );
};

Arrow.propTypes = {
    open: PropTypes.boolean,
};

Arrow.defaultProps = {
    open: false,
};
export default Arrow;
