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
        return (
            <div className='stepform'>
                <div className='dateInfo'>
                    <div className='dateInfo-title'>
                        <h1>Date Selection</h1>
                        <h2>Choose a date and time for the estimate.</h2>
                    </div>
                    <div className='dateInfo-body'>
                        <div className='dateInfo-stepformdots-div'>
                            <StepFormDots 
                            values={this.props.values} 
                            currentStep={this.props.values.step} 
                            setStep={this.props.setStep} />
                        </div>
                        <div className='dateInfo-stepformdots-body'>
                            <RegularDateInfo className='dateInfo-regular' />
                            <MobileDateInfo className='dateInfo-mobile' />
                        </div>
                        <div className='dateInfo-buttons'>
                            <button className='dateInfo-buttons-back' onClick={this.back}>Back</button>
                            <button className='dateInfo-buttons-next' onClick={this.continue}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DateInfo