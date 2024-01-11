import React from 'react';
import PropTypes from 'prop-types';
import './owner-profile.scss';

const OwnerProfile = (props) => {
    return (
        <div className="owner-profile">
            <p>{props.host.name}</p>
            <img src={props.host.picture} alt={props.host.name} />
        </div>
    );
};

OwnerProfile.propTypes = {
    host: PropTypes.object.isRequired,
};

export default OwnerProfile;
