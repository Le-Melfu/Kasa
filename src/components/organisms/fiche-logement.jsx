import React from 'react';
import Dropdown from '../molecules/dropdown';
import './fiche-logement.scss';

const FicheLogements = () => {
    return (
        <div className="fiche-logement">
            <div className="dropdown-section">
                <Dropdown title="description" />
                <Dropdown title="equipements" />
            </div>
        </div>
    );
};

export default FicheLogements;
