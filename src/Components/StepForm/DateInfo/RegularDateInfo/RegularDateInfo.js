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
            dateOfEstimate: this.props.values.date_of_estimate ? this.props.values.date_of_estimate : null,
            timeOfEstimate: this.props.values.time_of_estimate ? this.props.values.time_of_estimate : null
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

        this.setState({dateOfEstimate, date, timeOfEstimate: null})

        // Set date in parent state
        this.props.handleChange([
            {
                "type" : "date_of_estimate",
                "value" : dateOfEstimate
            }
            , 
            {
                "type" : "time_of_estimate",
                "value" : null
            }
        ])
    }

    // update new time selection in state 
    timeOfEstimateOnChange = (time) => {
        this.setState({timeOfEstimate: time})
        // Set time in parent state
        this.props.handleChange([
            {
                "type" : "time_of_estimate",
                "value" : time
            }
        ])
    }

    render() {
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
                            <h1>{this.state.timeOfEstimate == null ? '- -- ----' : `${this.state.timeOfEstimate}`}</h1>
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
                           <div 
                            id={this.state.takenTimes.includes('7 AM') ? 'time-option-taken' : null} 
                            disabled={this.state.takenTimes.includes('7 AM') ? true : false}
                            className={this.state.timeOfEstimate === '7 AM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('7 AM')} 
                            >7 AM</div>
                           <div 
                            id={this.state.takenTimes.includes('8 AM') ? 'time-option-taken' : null} 
                            disabled={this.state.takenTimes.includes('8 AM') ? true : false}
                            className={this.state.timeOfEstimate === '8 AM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('8 AM')} 
                            >8 AM</div>
                           <div 
                            id={this.state.takenTimes.includes('9 AM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('9 AM') ? true : false}
                            className={this.state.timeOfEstimate === '9 AM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('9 AM')} 
                            >9 AM</div>
                           <div 
                            id={this.state.takenTimes.includes('10 AM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('10 AM') ? true : false}
                            className={this.state.timeOfEstimate === '10 AM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('10 AM')} 
                            >10 AM</div>
                           <div 
                            id={this.state.takenTimes.includes('11 AM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('11 AM') ? true : false}
                            className={this.state.timeOfEstimate === '11 AM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('11 AM')} 
                            >11 AM</div>
                           <div 
                            id={this.state.takenTimes.includes('12 PM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('12 PM') ? true : false}
                            className={this.state.timeOfEstimate === '12 PM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('12 PM')} 
                            >12 PM</div>
                           <div 
                            id={this.state.takenTimes.includes('1 PM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('1 PM') ? true : false}
                            className={this.state.timeOfEstimate === '1 PM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('1 PM')} 
                            >1 PM</div>
                           <div 
                            id={this.state.takenTimes.includes('2 PM') ? 'time-option-taken' : null} 
                            disabled={this.state.takenTimes.includes('2 PM') ? true : false}
                            className={this.state.timeOfEstimate === '2 PM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('2 PM')}
                            >2 PM</div>
                           <div 
                            id={this.state.takenTimes.includes('3 PM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('3 PM') ? true : false}
                            className={this.state.timeOfEstimate === '3 PM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('3 PM')} 
                            >3 PM</div>
                           <div 
                            id={this.state.takenTimes.includes('4 PM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('4 PM') ? true : false}
                            className={this.state.timeOfEstimate === '4 PM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('4 PM')} 
                            >4 PM</div>
                           <div 
                            id={this.state.takenTimes.includes('5 PM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('5 PM') ? true : false}
                            className={this.state.timeOfEstimate === '5 PM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('5 PM')} 
                            >5 PM</div>
                           <div 
                            id={this.state.takenTimes.includes('6 PM') ? 'time-option-taken' : null}
                            disabled={this.state.takenTimes.includes('6 PM') ? true : false}
                            className={this.state.timeOfEstimate === '6 PM' ? 'time-option-active' : null} 
                            onClick={() => this.timeOfEstimateOnChange('6 PM')} 
                            >6 PM</div>
                        </div>
                    </div>
                    <div className='dateInfo-reg-body-select'>
                        <button 
                            className={this.state.selectOption == 'date' ? 'select-option-active' :'dateInfo-reg-body-option'} 
                            onClick={() => this.setSelectOption('date')}
                            >Date</button>
                        <button 
                            className={this.state.selectOption == 'time' ? 'select-option-active' :'dateInfo-reg-body-option'} 
                            disabled={this.state.dateOfEstimate == null  ? true : false}
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
