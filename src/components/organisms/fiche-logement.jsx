import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../molecules/dropdown';
import './fiche-logement.scss';
import OwnerProfile from '../molecules/owner-profile';

const FicheLogements = (props) => {
    return (
        <div className="fiche-logement">
            <div className="fiche-logement__header">
                <div>
                    <h2>{props.logement.title}</h2>
                    <p>{props.logement.location}</p>
                </div>
                <OwnerProfile host={props.logement.host} />
            </div>
            <div className="dropdown-section">
                <Dropdown
                    title="Description"
                    content={props.logement.description}
                />
                <Dropdown
                    title="Équipements"
                    content={props.logement.equipments}
                />
            </div>
        </div>
    );
};

FicheLogements.propTypes = {
    logement: PropTypes.object,
};

export default FicheLogements;
