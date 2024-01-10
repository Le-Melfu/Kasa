import React from 'react';
// import { useParams } from 'react-router-dom';
import './logements.scss';
import Carousel from '../components/molecules/carousel';
import FicheLogements from '../components/organisms/fiche-logement';

const Logements = () => {
    // const { id } = useParams();
    const testLogement = [
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
    ];
    return (
        <div className="logement">
            <Carousel content={testLogement} />
            <FicheLogements />
        </div>
    );
};

export default Logements;
