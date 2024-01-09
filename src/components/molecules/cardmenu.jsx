import React from 'react';
import Card from '../molecules/card';
import './cardmenu.scss';
import logements from '../../data/logements.json';

const CardMenu = () => {
    return (
        <div className="cardmenu">
            {logements.map((logement) => {
                return (
                    <Card
                        key={`${logement.id}+${logement.title}`}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                );
            })}
            ;
        </div>
    );
};

export default CardMenu;
