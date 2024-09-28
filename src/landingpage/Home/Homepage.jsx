import React from 'react';
import FitnessFacts from './FitnessFacts';
import HeroSection from './HeroSection';
import Pricing from './Pricing';

function Homepage() {
    return (
        <div>
            <HeroSection />
            <Pricing />
            <FitnessFacts />
        </div>
    );
}

export default Homepage;