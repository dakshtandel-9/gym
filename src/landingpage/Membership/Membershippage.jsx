import React from 'react';
import MembershipHeroSection from './MembershipHeroSection';
import Pricing from './Pricing';
import FitnessFacts from './FitnessFacts';

function MembershipPage() {
    return (
        <div>
            <MembershipHeroSection />
            <Pricing />
            <FitnessFacts />
        </div>
    );
}

export default MembershipPage;