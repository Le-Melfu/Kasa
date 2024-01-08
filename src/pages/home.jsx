import React from 'react';
import './home.scss';
import CardMenu from '../components/molecules/cardmenu';
import Banner from '../components/atoms/banner';
import homeBanner from '../assets/images/homepage-title-bg.png';

const Home = () => {
    return (
        <div className="home">
            <Banner catch="Chez vous, partout et ailleurs" image={homeBanner} />
            <CardMenu />
        </div>
    );
};

export default Home;
