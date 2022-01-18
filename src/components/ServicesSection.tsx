import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styled Components Import
import styled from 'styled-components';
import {StyledLayout, StyledDescription, StyledImage, StyledHide} from '../styles';

class ServicesSection extends React.Component{


    public render() {
        return (
            <Services>
                <StyledDescription>
                    <h2>High <span>quality</span> services</h2>
                    <Cards>
                        <Card>
                            <div className="icon">
                                <img src={clock} alt="clock"/>
                                <h3>Effecient</h3>
                            </div>
                            <p>Tick-tick goes the clock.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={teamwork} alt="teamwork"/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>Teamwork makes the dream work.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={diaphragm} alt="diaphragm"/>
                                <h3>Diaphragm</h3>
                            </div>
                            <p>Oops, I ate all the muffins.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={money} alt="money"/>
                                <h3>Affordable</h3>
                            </div>
                            <p>Budget this into your consideration.</p>
                        </Card>
                    </Cards>
                </StyledDescription>
                <StyledImage>
                <img src={home2} alt="" />
                </StyledImage>
            </Services>
        );
    }
}

//Custom Styled Components
const Services = styled(StyledLayout)`
    h2 {
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            padding: 1 rem;
            color: black;
        }
    }
`

export default ServicesSection;