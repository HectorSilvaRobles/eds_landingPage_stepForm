import React, { Component } from 'react'
import './stepformdots.css'

export class StepFormDots extends Component {
    render() {
        const {res_or_com, intr_extr_both, address, city, state, zipcode, time_of_estimate, date_of_estimate} = this.props.values
        return (
            <div className='stepFormDotsContainer'>
                <button 
                    onClick={() => this.props.setStep(1)} 
                    className={this.props.currentStep == 1 ? 'active-stepFormDots' : 'stepFormDots'}></button>
                <button 
                    disabled={res_or_com === null || intr_extr_both === null ? true : false}
                    onClick={() => this.props.setStep(2)} 
                    id={res_or_com === null || intr_extr_both === null ? 'disabled-stepFormDots' : null}
                    className={this.props.currentStep == 2 ? 'active-stepFormDots' : 'stepFormDots'}></button>
                <button 
                    disabled={res_or_com === null || intr_extr_both === null || address === null || city === null || state === null || zipcode === null ? true : false}
                    onClick={() => this.props.setStep(3)} 
                    id={res_or_com === null || intr_extr_both === null || address === null || city === null || state === null || zipcode === null ? 'disabled-stepFormDots' : null}
                    className={this.props.currentStep == 3 ? 'active-stepFormDots' : 'stepFormDots'}></button>
                <button 
                    disabled={res_or_com === null || intr_extr_both === null || address === null || city === null || state === null || zipcode === null || date_of_estimate == null || time_of_estimate == null  ? true : false}
                    onClick={() => this.props.setStep(4)}
                    id={res_or_com === null || intr_extr_both === null || address === null || city === null || state === null || zipcode === null || date_of_estimate == null || time_of_estimate == null ? 'disabled-stepFormDots' : null}
                    className={this.props.currentStep == 4 ? 'active-stepFormDots' : 'stepFormDots'}></button>
            </div>
        )
    }
}

export default StepFormDots
