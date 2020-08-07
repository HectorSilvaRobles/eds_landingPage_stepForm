import React, { Component } from 'react'
import './regulardateinfo.css'

export class RegularDateInfo extends Component {
    render() {
        return (
            <div className='dateInfo-regular'>
                <div className='dateInfo-regular-header'></div>
                <div className='dateInfo-regular-body'>
                    <div className='dateInfo-reg-body-select'>
                        <div className='dateInfo-reg-body-option'></div>
                        <div className='dateInfo-reg-body-option'></div>
                    </div>
                    <div className='dateInfo-reg-body-content'></div>
                </div>
            </div>
        )
    }
}

export default RegularDateInfo
