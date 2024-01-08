import React from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../components/molecules/dropdown';
import './logements.scss';

const Logements = () => {
    const { id } = useParams();
    console.log(id);
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
            <div className="dropdown-section">
                <Dropdown title="Description" />
                <Dropdown title="Equipements" />
            </div>
        </div>
    );
};

export default Logements;
