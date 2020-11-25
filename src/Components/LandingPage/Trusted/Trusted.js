import React from 'react'
import BBB from '../../../Assets/BBB-Logo.png'
import './trusted.css';

const Trusted = (props) => {
    return (
        <div className='trusted'>
            <div className='trusted-title'>
                <h1>Contractors You Can Trust</h1>
                <h2>We are a licensed, bonded & Insured company accredited by the Better Business Bureau.</h2>
            </div>
            <div className='trusted-content'>
                <div className='trusted-content-nums'>
                    <h1>Paint Contract Number</h1>
                    <h2>#328758</h2>
                </div>
                <div className='trusted-content-nums'>
                    <h1>Drywall Contract Number</h1>
                    <h2>#330755</h2>
                </div>
                <div className='trusted-content-bbb'>
                    <img src={BBB} />
                </div>
            </div>
        </div>
    )
}

export default Trusted