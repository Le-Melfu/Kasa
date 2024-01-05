import React from 'react';
import RoundedImage from '../components/atoms/roundedpicture';

const Home = () => {
    return (
        <div>
            <RoundedImage
                src="/src/assets/images/homepage-title-bg.png"
                alt="paysage"
            />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Home;
