import React from 'react';
import HeroSection from './HeroSection';
import FitnessFacts from '../Home/FitnessFacts';
import AboutSection from './AboutSection';

function Aboutpage() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <FitnessFacts />
        </div>
    );
}

export default Aboutpage;