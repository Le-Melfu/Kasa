import React from 'react';
import arrow from '../../assets/icons/arrow_back_ios-24px 2.svg';
import './arrow.scss';
import PropTypes from 'prop-types';

const Arrow = (props) => {
    const animOpen = props.open ? 'arrow rotateDown' : 'arrow';

    return (
        <div className={`${animOpen}`}>
            <img src={arrow} alt="arrow" />
        </div>
    );
};

Arrow.propTypes = {
    open: PropTypes.bool,
};

Arrow.defaultProps = {
    open: false,
};
export default Arrow;
