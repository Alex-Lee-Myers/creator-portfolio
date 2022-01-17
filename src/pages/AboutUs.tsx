import React from 'react';
import AboutMeSection from '../components/AboutMeSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

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