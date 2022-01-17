import React from 'react';


class ServicesSection extends React.Component{


    public render() {
        return (
            <div className="services-section">
                <div className="services-section__text-container">
                    {/* <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p> */}
                </div>
                <div className="services-section__image-container">
                    {/* <img src={this.props.image} alt=""/> */}
                </div>
            </div>
        );
    }
}

export default ServicesSection;