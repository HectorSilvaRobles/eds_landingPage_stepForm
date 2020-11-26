import React from 'react';
import Image from '../../../Assets/smallbusiness.png'
import './smallbusiness.css';

const SmallBusiness = (props) => {
    return (
        <div className='smallbusiness'>
            <div className='smallbusiness-image'>
                <img src={Image} />
            </div>
            <div className='smallbusiness-title'>
                <h1>Support Local Small Businesses</h1>
                <h2>Receive a complimentary gifts when booking with us as a show of support to other small local businesses.</h2>
            </div>
        </div>
    )
}

export default SmallBusiness