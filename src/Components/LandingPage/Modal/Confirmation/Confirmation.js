import React from 'react'
import './confirmation.css'

const Confirmation = (props) => {
    return (
        <div className='confirmation'>
            <div className='confirm-title'>
                <h1>Confirmation</h1>
                <h2>Make sure everything is correct.</h2>
            </div>
            <div className='confirm-body'>
                <div className='confirm-card'>
                    <div className='confirm-card-title'></div>
                </div>
            </div>
            <div className='confirm-button'></div>
        </div>
    )
}


export default Confirmation