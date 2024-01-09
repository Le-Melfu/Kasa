import React from 'react';
import Dropdown from '../molecules/dropdown';

const Logements = () => {
    return (
        <div>
            <Dropdown content="description" />
            <Dropdown content="equipements" />
        </div>
    );
};

export default Logements;
