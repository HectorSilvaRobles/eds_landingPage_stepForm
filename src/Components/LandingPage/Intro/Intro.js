import React from 'react'
import Image from '../../../Assets/intro.png'
import './intro.css'

const Intro = (props) => {
    return (
        <div className='intro'>
            <div className='intro-image'>
                <img src={Image} />
            </div>
            <div className='intro-info'>
                <h1>What We Do</h1>
                <h2>We provide interior and exterior work at affordable prices for commercial and residential customers.</h2>
            </div>
        </div>
    )
}

export default Intro