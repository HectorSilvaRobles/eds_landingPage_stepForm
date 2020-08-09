import React, { Component } from 'react';
import './regulardateinfo.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'

export class RegularDateInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            selectOption: 'date',
            date: new Date(),
            takenTimes: [],
            dateOfEstimate: null,
            timeOfEstimate: null
        }
    }


    // select between date and time views
    setSelectOption = (option) => {
        this.setState({selectOption: option})
    }

    // For when the calendar selection changes
    calendarOnChange = (date) => {
        let theMonths = {
            1 : 'Jan',
            2 : 'Feb',
            3 : 'Mar',
            4 : 'Apr',
            5 : 'May',
            6 : 'Jun',
            7 : 'Jul',
            8 : 'Aug',
            9 : 'Sep',
            10 : 'Oct',
            11 : 'Nov',
            12 : 'Dec'
        }
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()
        let monthName = theMonths[month]
        let dateOfEstimate = `${monthName} ${day}, ${year}`

        // Make request to database to get times available on  specific date
        axios.post('https://xjsollrqdb.execute-api.us-west-1.amazonaws.com/EDS_GET_Date_Of_Estimates/day', {estimateDate: dateOfEstimate})
        .then(res => this.setState({takenTimes: res.data.body}))

        this.setState({dateOfEstimate, date})
    }

    render() {
        console.log(this.state.takenTimes)
        return (
            <div className='dateInfo-regular'>
                <div className='dateInfo-regular-header'>
                    <div className='dateInfo-regular-header-boxes'>
                        <div className='dateInfo-regular-header-date'>
                            <h2>Date</h2>
                            <h1>{this.state.dateOfEstimate == null ? '- -- ----' : this.state.dateOfEstimate}</h1>
                        </div>
                        <div className='dateInfo-regular-header-time'>
                            <h2>Time</h2>
                            <h1>{this.state.timeOfEstimate == null ? '- -- ----' : this.state.dateOfEstimate}</h1>
                        </div>
                    </div>
                    
                </div>
                <div className='dateInfo-regular-body'>
                    <div className='dateInfo-reg-body-content'>
                        <div className={this.state.selectOption == 'date' ? 'content-date-active' : 'content-date-hidden'}>
                            <Calendar 
                                onChange={this.calendarOnChange}
                                value={this.state.date}
                                calendarType={"US"}
                                minDetail={'month'}
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
                            disabled={this.state.dateOfEstimate == null ? true : false}
                            id={this.state.dateOfEstimate == null ? 'select-option-disabled' : 'dateInfo-reg-body-option'}
                            onClick={() => this.setSelectOption('time')}
                            >Time</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default RegularDateInfo
