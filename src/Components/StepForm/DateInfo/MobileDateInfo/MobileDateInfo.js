import React, { Component } from 'react'
import './mobiledateinfo.css'

export class MobileDateInfo extends Component {
    render() {
        return (
            <div className='dateInfo-mobile'>
                <div className='dateInfo-mobile-header'>
                    <div className='dateInfo-mobile-header-div'>
                        <h1></h1>
                        <h2></h2>
                    </div>
                </div>
                <div className='dateInfo-mobile-body'>
                    <div className='dateInfo-mobile-body-modal'>Date</div>
                    <div className='dateInfo-mobile-body-modal'>Time</div>
                </div>

            </div>
        )
    }
}

export default MobileDateInfo
