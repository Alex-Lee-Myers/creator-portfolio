import React from 'react';

class FaqSection extends React.Component {

    public render() {
        return (
            <div className="faq">
                <h2>Any Questions <span>FAQ</span></h2>
                    <div className="question">
                        <h4>How Do I Start?</h4>
                        <div className="answer"></div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis dolores unde consectetur maiores accusantium. Voluptates optio dolorum eum neque.
                            </p>
                    </div>
                    <div className="question">
                        <h4>Different Payment Methods</h4>
                        <div className="answer"></div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis dolores unde consectetur maiores accusantium. Voluptates optio dolorum eum neque.
                            </p>
                    </div>
                    <div className="question">
                        <h4>What Products Do You Offer?</h4>
                        <div className="answer"></div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis dolores unde consectetur maiores accusantium. Voluptates optio dolorum eum neque.
                            </p>
                    </div>
            </div>
        );
    }
}

export default FaqSection;