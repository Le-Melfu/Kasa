import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../molecules/dropdown';
import './fiche-logement.scss';

const FicheLogements = (props) => {
    return (
        <div className="fiche-logement">
            <div>
                <h2>{props.title}</h2>
                <p>{props.location}</p>
            </div>
            <div className="dropdown-section">
                <Dropdown title="description" content={props.description} />
                <Dropdown title="equipements" content={props.equipements} />
            </div>
        </div>
    );
};

FicheLogements.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string.isRequired,
    equipements: PropTypes.array,
    description: PropTypes.string,
};

export default FicheLogements;
