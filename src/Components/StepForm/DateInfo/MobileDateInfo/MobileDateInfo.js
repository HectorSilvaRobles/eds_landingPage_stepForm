import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import {RiCloseCircleLine} from 'react-icons/ri'
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './mobiledateinfo.css'

export class MobileDateInfo extends Component {
    constructor(props){
        super(props)
            this.state = {
                dateModal: false,
                timeModal: false,
                date: null,
                takenTimes: [],
                dateOfEstimate: this.props.values.date_of_estimate ? this.props.values.date_of_estimate : null,
                timeOfEstimate: this.props.values.time_of_estimate ? this.props.values.time_of_estimate : null
            }
    }

    // open modal based on which type
    openModal = (type) => {
        // console.log(type)
        if(type == 'dateModal'){
            this.setState({
                dateModal: true,
                timeModal: false
            })
        } else if(type == 'timeModal'){
            this.setState({
                dateModal: false,
                timeModal: true
            })
        }
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

    // Format calendar for mobile
    formatDate = (date, selected) => {
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
            let year = date.getFullYear()
            let monthName = theMonths[month]
            let dateOfEstimate = `${monthName} ${year}`
            return dateOfEstimate
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


    // format time in mobile header 
    formatTime = () => {
        let timesplit = this.state.timeOfEstimate.split(' ')
        timesplit[0] = timesplit[0] + ':00'
        timesplit = timesplit.join(' ')
        return timesplit
    }

    render() {
        console.log(this.state)
        return (
            <div className='dateInfo-mobile'>
                <div className='dateInfo-mobile-header'>
                    <div className='dateInfo-mobile-header-div'>
                        <h1>{this.state.dateOfEstimate == null ? '-- -- ----' : this.state.dateOfEstimate}</h1>
                        <h1>{this.state.timeOfEstimate == null ? '---- --' : this.formatTime()}</h1>
                    </div>
                </div>
                <div className='dateInfo-mobile-body'>
                    <div 
                        className='dateInfo-mobile-body-modal' 
                        id={this.state.dateOfEstimate == null ? null : 'completed-modal-option'}
                        onClick={() => this.openModal('dateModal')}
                    >Date</div>
                    <Modal
                        open={this.state.dateModal}
                        onClose={() => this.setState({dateModal: false})}
                        className='backdrop-modal'
                    >
                        <div className='dateInfo-modal-div'>
                            <div className='dateInfo-modal-div-header'>
                                <div className='dateInfo-modal-div-header-spacer'></div>
                                <div className='dateInfo-modal-div-header-title'>Date</div>
                                <div className='dateInfo-modal-div-header-spacer'><RiCloseCircleLine onClick={() => this.setState({dateModal: false})} /></div>

                            </div>
                            <div className='dateInfo-modal-div-body'>
                                <Calendar 
                                    onChange={this.calendarOnChange}
                                    value={this.state.date}
                                    calendarType={"US"}
                                    minDetail={'month'}
                                    formatMonthYear={(locale, date) => this.formatDate(date, 'MMMM YYYY')}
                                    minDate={new Date()}
                                    // formatShortWeekday={(local, date) => this.formatWeekday(date, 'dd')}
                                />
                            </div>
                            <button
                                className={this.state.dateOfEstimate === null ? 'dateInfo-modal-div-button-disabled' :'dateInfo-modal-div-button'}
                                disabled={this.state.dateOfEstimate === null ? true : false}
                                onClick={() => this.setState({dateModal: false, timeModal: true})}
                            >Select</button>
                        </div>
                    </Modal>
                    <div 
                        onClick={() => this.openModal('timeModal')}
                        className={this.state.dateOfEstimate == null ? 'dateInfo-modal-button-disabled' :'dateInfo-mobile-body-modal'}
                        disabled={this.state.dateOfEstimate == null ? true : false}
                    >Time</div>
                    <Modal
                        open={this.state.timeModal}
                        onClose={() => this.setState({timeModal: false})}
                        className='backdrop-modal'
                    >
                        <div className='dateInfo-modal-div'>
                            <div className='dateInfo-modal-div-header'>
                                <div className='dateInfo-modal-div-header-spacer'></div>
                                <div className='dateInfo-modal-div-header-title'>Time</div>
                                <div className='dateInfo-modal-div-header-spacer'><RiCloseCircleLine onClick={() => this.setState({timeModal: false})} /></div>
                            </div>
                            <div className='dateInfo-modal-div-body'>
                                <div className='dateInfo-modal-time-header'>{this.state.timeOfEstimate ? this.state.timeOfEstimate : '-- --'}</div>
                                <div className='dateInfo-modal-time-body'>
                                    <div
                                        id={this.state.takenTimes.includes('7 AM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('7 AM') ? true : false}
                                        className={this.state.timeOfEstimate === '7 AM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('7 AM')}
                                    >7 AM</div>
                                    <div
                                        id={this.state.takenTimes.includes('8 AM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('8 AM') ? true : false}
                                        className={this.state.timeOfEstimate === '8 AM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('8 AM')}
                                    >8 AM</div>
                                    <div
                                        id={this.state.takenTimes.includes('9 AM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('9 AM') ? true : false}
                                        className={this.state.timeOfEstimate === '9 AM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('9 AM')}
                                    >9 AM</div>
                                    <div
                                        id={this.state.takenTimes.includes('10 AM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('10 AM') ? true : false}
                                        className={this.state.timeOfEstimate === '10 AM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('10 AM')}
                                    >10 AM</div>
                                    <div
                                        id={this.state.takenTimes.includes('11 AM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('11 AM') ? true : false}
                                        className={this.state.timeOfEstimate === '11 AM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('11 AM')}
                                    >11 AM</div>
                                    <div
                                        id={this.state.takenTimes.includes('12 PM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('12 PM') ? true : false}
                                        className={this.state.timeOfEstimate === '12 PM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('12 PM')}
                                    >12 PM</div>
                                    <div
                                        id={this.state.takenTimes.includes('1 PM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('1 PM') ? true : false}
                                        className={this.state.timeOfEstimate === '1 PM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('1 PM')}
                                    >1 PM</div>
                                    <div
                                        id={this.state.takenTimes.includes('2 PM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('2 PM') ? true : false}
                                        className={this.state.timeOfEstimate === '2 PM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('2 PM')}
                                    >2 PM</div>
                                    <div
                                        id={this.state.takenTimes.includes('3 PM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('3 PM') ? true : false}
                                        className={this.state.timeOfEstimate === '3 PM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('3 PM')}
                                    >3 PM</div>
                                    <div
                                        id={this.state.takenTimes.includes('4 PM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('4 PM') ? true : false}
                                        className={this.state.timeOfEstimate === '4 PM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('4 PM')}
                                    >4 PM</div>
                                    <div
                                        id={this.state.takenTimes.includes('5 PM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('5 PM') ? true : false}
                                        className={this.state.timeOfEstimate === '5 PM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('5 PM')}
                                    >5 PM</div>
                                    <div
                                        id={this.state.takenTimes.includes('6 PM') ? 'time-option-taken-mobile' : null}
                                        disabled={this.state.takenTimes.includes('6 PM') ? true : false}
                                        className={this.state.timeOfEstimate === '6 PM' ? 'time-option-active-mobile' : null}
                                        onClick={() => this.timeOfEstimateOnChange('6 PM')}
                                    >6 PM</div>
                                </div>
                            </div>
                            <button 
                                className={this.state.timeOfEstimate === null ? 'dateInfo-modal-div-button-disabled' :'dateInfo-modal-div-button'}
                                disabled={this.state.timeOfEstimate === null ? true : false}
                                onClick={() => this.setState({dateModal: false, timeModal: false})}
                            >Select</button>
                        </div>
                        
                    </Modal>
                </div>

            </div>
        )
    }
}

export default MobileDateInfo
