import React from 'react';
import styled from 'styled-components';
import {StyledLayout, StyledDescription, StyledImage, StyledHide} from '../styles';

class FaqSection extends React.Component {

    public render() {
        return (
            <Faq>
                <h2>Any Questions <span>FAQ</span></h2>
                    <div className="question">
                        <h4>How Do I Start?</h4>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis dolores unde consectetur maiores accusantium. Voluptates optio dolorum eum neque.
                            </p>
                        </div>
                        <div className="faq-line"></div>
                    </div>
                    <div className="question">
                        <h4>Different Payment Methods</h4>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis dolores unde consectetur maiores accusantium. Voluptates optio dolorum eum neque.
                            </p>
                        </div>
                        <div className="faq-line"></div>
                    </div>
                    <div className="question">
                        <h4>What Products Do You Offer?</h4>
                        <div className="answer"></div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis dolores unde consectetur maiores accusantium. Voluptates optio dolorum eum neque.
                            </p>
                    </div>
            </Faq>
        );
    }
}

const Faq = styled(StyledLayout)`
        display: block;

    span {
            
        }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
        }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
        }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
        }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;