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
                <div>
                    <h1>Need A New Paint Job?</h1>
                    <h2>Get a free estimate for your property today.</h2>
                    <button>Schedule Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero