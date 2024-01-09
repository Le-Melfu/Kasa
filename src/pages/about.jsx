import React from 'react';
import './about.scss';
import aboutBanner from '../assets/images/about-banner.jpg';
import Banner from '../components/molecules//banner';
import Dropdownabout from '../components/organisms/dropdownlistabout';

const About = () => {
    return (
        <div className="about">
            <Banner image={aboutBanner} />
            <Dropdownabout />
        </div>
    );
};

export default About;
