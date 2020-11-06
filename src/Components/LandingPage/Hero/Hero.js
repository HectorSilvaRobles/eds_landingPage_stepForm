import React from 'react'
import heroImage from '../../../Assets/hero.jpg'
import heroImageMobile from '../../../Assets/heromobile.jpg'

import './hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={heroImage} alt='hero image' className='reghero' />
            <img src={heroImageMobile} alt='hero image' className='mobilehero' />
            <div className='hero-info'>
                <div className='hero-info-words'>
                    <h1>Arizona Paint & Coating Solutions</h1>
                    <h2>We offer quality services for both home owners and businesses.</h2>
                </div>
                <div className='hero-info-buttons'>
                        <button className='hero-quote-button' >Get Quote</button>
                        <button className='hero-learn-button' >Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero