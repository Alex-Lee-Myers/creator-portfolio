import React from 'react';
import AboutMeSection from '../components/AboutMeSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

class AboutUs extends React.Component {
    render(){
        return(
            <>
            <AboutMeSection />
            <ServicesSection />
            <FaqSection />
            </>
        )
    }
}

export default AboutUs;