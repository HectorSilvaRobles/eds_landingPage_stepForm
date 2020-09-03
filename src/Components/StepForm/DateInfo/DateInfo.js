import React, {Component} from 'react';
import './dateinfo.css'
import StepFormDots from '../StepFormDots/StepFormDots'
import MobileDateInfo from './MobileDateInfo/MobileDateInfo'
import RegularDateInfo from './RegularDateInfo/RegularDateInfo'

export class DateInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render(){
        console.log(this.props.values)
        return (
            <div className='stepform'>
                <div className='dateInfo'>
                    <div className='dateInfo-title'>
                        <h1>Date Selection</h1>
                        <h2>Choose a date and time.</h2>
                    </div>
                    <div className='dateInfo-body'>
                        <div className='dateInfo-stepformdots-div'>
                            <StepFormDots 
                            values={this.props.values} 
                            currentStep={this.props.values.step} 
                            setStep={this.props.setStep} />
                        </div>
                        <div className='dateInfo-stepformdots-body'>
                            <RegularDateInfo className='dateInfo-regular' values={this.props.values} handleChange={this.props.handleChange} />
                            <MobileDateInfo className='dateInfo-mobile' values={this.props.values} handleChange={this.props.handleChange} />
                        </div>
                        <div className='dateInfo-buttons'>
                            <button className='dateInfo-buttons-back' onClick={this.back}>Back</button>
                            <button 
                                className='dateInfo-buttons-next' 
                                disabled={!this.props.values.time_of_estimate || !this.props.values.date_of_estimate ? true : false } 
                                id={!this.props.values.time_of_estimate || !this.props.values.date_of_estimate ? 'date_info_button_disabled' : 'date_info_button_submit'}
                                onClick={this.continue}
                            >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DateInfo