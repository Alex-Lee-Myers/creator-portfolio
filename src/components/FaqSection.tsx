import React from 'react';

class FaqSections extends React.Component {

    public render() {
        return (
            <div className="faq-sections">
                <div className="faq-sections__text-container">
                    {/* <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p> */}
                </div>
                <div className="faq-sections__image-container">
                    {/* <img src={this.props.image} alt=""/> */}
                </div>
            </div>
        );
    }
}

export default FaqSections;