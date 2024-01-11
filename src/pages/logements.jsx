import React from 'react';
import { useParams } from 'react-router-dom';
import './logements.scss';
import Carousel from '../components/molecules/carousel';
import FicheLogements from '../components/organisms/fiche-logement';
import logements from '../data/logements.json';

const Logements = () => {
    const { id } = useParams();
    const selectedLogement = logements.find((logement) => logement.id === id);

    return (
        <div className="logement">
            <p></p>
            <Carousel
                content={selectedLogement.pictures}
                alt={selectedLogement.title}
            />
            <FicheLogements />
        </div>
    );
};

export default Logements;
