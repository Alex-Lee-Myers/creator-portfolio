import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

class ServicesSection extends React.Component{


    public render() {
        return (
            <div className="services-section">
                <div className="description">
                    <h2>High <span>quality</span> services</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt="clock"/>
                                <h3>Effecient</h3>
                            </div>
                            <p>Tick-tick goes the clock.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt="teamwork"/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>Teamwork makes the dream work.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={diaphragm} alt="diaphragm"/>
                                <h3>Diaphragm</h3>
                            </div>
                            <p>Oops, I ate all the muffins.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={money} alt="money"/>
                                <h3>Affordable</h3>
                            </div>
                            <p>Budget this into your consideration.</p>
                        </div>
                    </div>
                </div>
                <img src={home2} alt="" />
            </div>
        );
    }
}

export default ServicesSection;