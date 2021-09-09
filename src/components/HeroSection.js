import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/video/video1.mp4" autoPlay loop muted />
            {/* <div className="headertext">PARADISR</div> */}
            <h1>NEED SOME PRIVACY?</h1>
            <p>CHECK THE <b>PARADISR</b> REAL-ESTATE PORTFOLIO!</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle="btn--outline" 
                buttonSize="btn--large"
                >
                    PORTFOLIO
                </Button>
                <Button 
                className="btns" 
                buttonStyle="btn--primary" 
                buttonSize="btn--large"
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
