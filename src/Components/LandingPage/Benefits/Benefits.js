import React from 'react'
import {FaPiggyBank, FaHandshake, FaSmile} from 'react-icons/fa'
import './benefits.css'

const Benefits = () => {
    return (
        <div className='benefits'>
            <div className='benefits-header'>
                <h1>Why Choose Us</h1>
                <h2>Some reasons why you should do business with us.</h2>
            </div>
            <div className='benefits-body'>
                <div className='benefit-card'>
                    <FaPiggyBank />
                    <h1>Cost Efficient</h1>
                    <p>Have 3 reasons why someone should do business with you. 2-3 sentences.</p>
                </div>
                <div className='benefit-card'>
                    <FaHandshake />
                    <h1>Assurance</h1>
                    <p>We give our clients the peace of mind they deserve by being reliable in all our work.</p>
                </div>
                <div className='benefit-card'>
                    <FaSmile />
                    <h1>Satisfaction</h1>
                    <p>Have 3 reasons why someone should do business with you. 2-3 sentences.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits