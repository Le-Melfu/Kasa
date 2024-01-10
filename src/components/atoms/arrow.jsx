import React from 'react';
import arrow from '../../assets/icons/arrow_back_ios-24px 2.svg';
import './arrow.scss';
import PropTypes from 'prop-types';

const Arrow = (props) => {
    const animOpen = props.open ? 'arrow rotateDown' : 'arrow';
    const rotationLOR =
        props.direction === 'left'
            ? 'rotateLeft'
            : props.direction === 'right'
              ? 'rotateRight'
              : '';
    return (
        <div className={`${animOpen} ${rotationLOR}`}>
            <img src={arrow} alt="arrow" />
        </div>
    );
};

Arrow.propTypes = {
    open: PropTypes.boolean,
    direction: PropTypes.string,
};

Arrow.defaultProps = {
    open: false,
    direction: '',
};
export default Arrow;
