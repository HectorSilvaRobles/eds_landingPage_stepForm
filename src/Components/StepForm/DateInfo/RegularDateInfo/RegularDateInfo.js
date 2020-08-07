import React, { Component } from 'react';
import './regulardateinfo.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export class RegularDateInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            selectOption: 'date',
            date: new Date()
        }
    }


    // select between date and time views
    setSelectOption = (option) => {
        this.setState({selectOption: option})
    }

    // For when the calendar selection changes
    calendarOnChange = (date) => {
        this.setState({date})
    }

    render() {
        console.log(this.state)
        return (
            <div className='dateInfo-regular'>
                <div className='dateInfo-regular-header'></div>
                <div className='dateInfo-regular-body'>
                    <div className='dateInfo-reg-body-content'>
                        <div className={this.state.selectOption == 'date' ? 'content-date-active' : 'content-date-hidden'}>
                            <Calendar 
                                onChange={this.calendarOnChange}
                                value={this.state.date}
                            />
                        </div>
                        <div className={this.state.selectOption == 'time' ? 'content-time-active' : 'content-time-hidden'}>
                        time
                        </div>
                    </div>
                    <div className='dateInfo-reg-body-select'>
                        <button 
                            className={this.state.selectOption == 'date' ? 'select-option-active' :'dateInfo-reg-body-option'} 
                            onClick={() => this.setSelectOption('date')}
                            >Date</button>
                        <button 
                            className={this.state.selectOption == 'time' ? 'select-option-active' :'dateInfo-reg-body-option'} 
                            onClick={() => this.setSelectOption('time')}
                            >Time</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default RegularDateInfo
