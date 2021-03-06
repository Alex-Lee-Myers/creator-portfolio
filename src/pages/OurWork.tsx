import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

class OurWork extends React.Component {


//! Render UI
public render() {

    return (
        <StyledWork>

            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="The Athlete" />
                </Link>
            </StyledMovie>

            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={theracer} alt="The Athlete" />
                </Link>
            </StyledMovie>

            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={goodtimes} alt="Good Times" />
                </Link>
            </StyledMovie>

        </StyledWork>
    );
    }
}

const StyledWork = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    
    h2 {
        padding: 1rem 0rem;
    }
`

const StyledMovie = styled.div`
    padding-bottom: 10rem;
    
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`


export default OurWork;
