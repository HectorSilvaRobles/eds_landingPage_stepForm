import React from 'react';
import about from '../../../Assets/about.png'
import './about.css'

const About = () => {
    return (
        <div className='about'>
            <div className='about-image'>
                <img src={about} />
            </div>
            <div className='about-info'>
                <h1>Get To Know Us</h1>
                <h2>We are a veteran owned painting and drywall company serving Southwest Arizona and surrounding areas.</h2>
            </div>
        </div>
    )
}

export default About