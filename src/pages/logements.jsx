import React from 'react';
import { useParams } from 'react-router-dom';
import './logements.scss';
import Carousel from '../components/molecules/carousel';
import FicheLogements from '../components/organisms/fiche-logement';
import logements from '../data/logements.json';
import ErrorPage from './404';

const Logements = () => {
    const { id } = useParams();
    const selectedLogement = logements.find((logement) => logement.id === id);
    if (selectedLogement === undefined) {
        return <ErrorPage />;
    } else {
        return (
            <div className="logement">
                <Carousel
                    content={selectedLogement.pictures}
                    alt={selectedLogement.title}
                />
                <FicheLogements logement={selectedLogement} />
            </div>
        );
    }
};

export default Logements;
