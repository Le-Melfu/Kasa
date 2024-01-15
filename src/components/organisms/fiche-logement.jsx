import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../molecules/dropdown';
import './fiche-logement.scss';
import OwnerProfile from '../molecules/owner-profile';
import TagSection from '../molecules/tag-section';
import StarRating from '../molecules/starrating';

const FicheLogements = (props) => {
    return (
        <div className="fiche-logement">
            <div className="fiche-logement__header">
                <div className="fiche-logement__title">
                    <div className="fiche-logement__text">
                        <h2>{props.logement.title}</h2>
                        <p>{props.logement.location}</p>
                    </div>
                    <TagSection content={props.logement.tags} />
                </div>
                <div className="fiche-logement__infos">
                    <OwnerProfile host={props.logement.host} />
                    <StarRating rating={props.logement.rating} />
                </div>
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
