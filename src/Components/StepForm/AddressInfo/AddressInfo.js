import React, {useState} from 'react';
import './addressinfo.css';
import {useForm }from 'react-hook-form';
import StepFormDots from '../StepFormDots/StepFormDots'

const AddressInfo = (props) => {
    const next = (e) => {
        e.preventDefault();
        props.nextStep()
    }

    let back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const {register, handleSubmit, formState, errors} = useForm({mode: 'onChange'})
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='stepform'>
            <div className='addressInfo'>
                    <div className='addressInfo-title'>
                        <h1>Location Of Estimate</h1>
                        <p>Let us know where to be.</p>
                    </div>
                    <div className='addressInfo-body'>
                        <div className='property_info_body_steps'>
                            <StepFormDots values={props.values} currentStep={props.values.step} setStep={props.setStep} />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='addressForm'>
                            <div className='addressInfo-form'>
                                <input
                                    placeholder='fullname'
                                    type='text'
                                    name='fullname'
                                    className={errors.fullname ? 'error-input' : 'input'}
                                    ref={register({required: true, minLength: 3, pattern: /[A-Za-z]/})}
                                />
                                {errors.fullname && console.log(errors)}
                                <input
                                    placeholder='email'
                                    type='text'
                                    name='email'
                                    ref={register({required: true, minLength: 3, pattern: /[A-Za-z]/})}
                                />
                                {errors.fullname && console.log(errors)}
                            </div>
                            <div className='addressInfo-buttons'>
                                <button type="submit" disabled={!formState.isValid}>Next</button>
                                <button onClick={back} >Back</button>
                            </div>
                            
                        </form>
                    </div>
            </div>
            
        </div>
    )
}

export default AddressInfo