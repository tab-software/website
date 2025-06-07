import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css'

function Hero() {
    return (
            <div className="App-hero">
                <div className='App-hero-div-title-box'>
                    <div className='App-hero-title'>
                        <Typewriter typeSpeed={200} deleteSpeed={200} words={['tab']} cursorStyle="_" cursor />
                    </div>
                    <div className='App-hero-slogan-text'>
                        <Typewriter typeSpeed={100} words={['Tu solución', 'Somos nosotros']} loop />
                    </div>
                </div>
            </div>
    )
};

export default Hero;