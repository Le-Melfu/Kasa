import React from 'react';
import { useParams } from 'react-router-dom';
import './logements.scss';

const Logements = () => {
    const { id } = useParams();
    return (
        <div className="logements">
            <carousel></carousel>
            <div className="logements__header">
                <div>
                    <h2>Logements {id}</h2>
                    <p>location</p>
                </div>
                <div>
                    <p>Proprio</p>
                </div>
            </div>
            <div className="logements__notation">
                <p>tags</p>
                <p>stars</p>
            </div>
        </div>
    );
};

export default Logements;
