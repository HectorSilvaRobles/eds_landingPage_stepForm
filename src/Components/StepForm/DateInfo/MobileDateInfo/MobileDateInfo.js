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
                dateOfEstimate: null,
                timeOfEstimate: null
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

        // // Set date in parent state
        // this.props.handleChange([
        //     {
        //         "type" : "date_of_estimate",
        //         "value" : dateOfEstimate
        //     }
        //     , 
        //     {
        //         "type" : "time_of_estimate",
        //         "value" : null
        //     }
        // ])
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

    formatWeekday = (date, format) => {
        let theWeekday = {
            1 : 'S',
            2 : 'M',
            3 : 'T',
            4 : 'W',
            5 : 'T',
            6 : 'F',
            7 : 'S'
        }
        // let weekday = date.getDay() + 1
        // let shortWeekday = theWeekday[weekday]
        console.log(theWeekday)
    }

    render() {
        console.log(this.state)
        return (
            <div className='dateInfo-mobile'>
                <div className='dateInfo-mobile-header'>
                    <div className='dateInfo-mobile-header-div'>
                        <h1>{this.state.dateOfEstimate == null ? '-- -- ----' : this.state.dateOfEstimate}</h1>
                        <h2></h2>
                    </div>
                </div>
                <div className='dateInfo-mobile-body'>
                    <div 
                        className='dateInfo-mobile-body-modal' 
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
                                    // formatShortWeekday={(local, date) => this.formatWeekday(date, 'dd')}
                                />
                            </div>
                            <div 
                                className={this.state.dateOfEstimate == null ? 'dateInfo-modal-div-button-disabled' :'dateInfo-modal-div-button'}
                                disabled={this.state.dateOfEstimate == null ? true : false}
                            >Select</div>
                        </div>
                    </Modal>
                    <div 
                        className='dateInfo-mobile-body-modal'
                        onClick={() => this.openModal('timeModal')}
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
                            <div className='dateInfo-modal-div-body'></div>
                            <div className='dateInfo-modal-div-button'></div>
                        </div>
                        
                    </Modal>
                </div>

            </div>
        )
    }
}

export default MobileDateInfo
