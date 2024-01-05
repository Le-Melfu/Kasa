import React from 'react';
import './home.scss';
import CardMenu from '../components/molecules/cardmenu';

const Home = () => {
    return (
        <div className="home">
            <div className="catch">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <CardMenu />
        </div>
    );
};

export default Home;
