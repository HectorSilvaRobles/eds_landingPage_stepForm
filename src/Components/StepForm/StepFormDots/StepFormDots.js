import React, { Component } from 'react'
import './stepformdots.css'

export class StepFormDots extends Component {
    render() {
        return (
            <div className='stepFormDotsContainer'>
                <div onClick={() => this.props.setStep(1)} className={this.props.currentStep == 1 ? 'active-stepFormDots' : 'stepFormDots'}></div>
                <div onClick={() => this.props.setStep(2)} className={this.props.currentStep == 2 ? 'active-stepFormDots' : 'stepFormDots'}></div>
                <div onClick={() => this.props.setStep(3)} className={this.props.currentStep == 3 ? 'active-stepFormDots' : 'stepFormDots'}></div>
                <div onClick={() => this.props.setStep(4)} className={this.props.currentStep == 4 ? 'active-stepFormDots' : 'stepFormDots'}></div>
            </div>
        )
    }
}

export default StepFormDots
