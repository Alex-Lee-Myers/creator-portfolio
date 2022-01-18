import React from "react";
import home1 from '../img/home1.png';
// Styled Components Import
// import styled from 'styled-components';
import {StyledLayout, StyledDescription, StyledImage, StyledHide} from '../styles';

class AboutMeSection extends React.Component{


//! Render UI
public render() {
    return (
            <StyledLayout>
                <StyledDescription>
                    <div className="title">
                        <StyledHide>
                            <h2>
                                We work to make
                            </h2>
                        </StyledHide>
                        <StyledHide>
                            <h2>
                            your <span>dreams</span> come
                            </h2>
                        </StyledHide>
                        <StyledHide>
                            <h2>true.</h2>
                        </StyledHide>
                        <div className="about-me-section__text-container">
                            <p>
                            Contact us for any photography or videography ideas that you
                            have. We have professionals with amazing skillStyled
                            </p>
                            <button>Contact Us</button>
                        </div>
                        
                    </div>
                </StyledDescription>
                <StyledImage>
                            <img src={home1} alt="guy with a camera"/>
                    </StyledImage>
            </StyledLayout>
        );
    }
}



export default AboutMeSection;
