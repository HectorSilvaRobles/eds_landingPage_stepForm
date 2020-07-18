import React, {Component} from 'react';
import './userinfo.css'
import {useForm} from 'react-hook-form'
import StepFormDots from '../StepFormDots/StepFormDots'
import {IoMdPerson, IoMdMail} from 'react-icons/io'
import {FaPhoneAlt} from 'react-icons/fa'

const UserInfo = (props) => {
    // To continue to next form
    const next = (e) => {
        // e.preventDefault();
        props.nextStep()
    }

    // to go back to previous form
    let back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const {register, handleSubmit, formState, errors} = useForm({mode: 'onChange'})
    // On submit update state with new values
    const onSubmit = (data) => {
        const {address, city, state, zipcode} = data
        props.handleChange([
            {
                "type":"address",
                "value": address.toUpperCase()
            },
            {
                "type":"city",
                "value": city.toUpperCase()
            },
            {
                "type":"state",
                "value": state.toUpperCase()
            },
            {
                "type":"zipcode",
                "value": zipcode.toUpperCase()
            }
        ])
        next()
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
                                <div className='addressInfoForm-div'>
                                    <div className='addressInfoForm-div-section'>
                                        <h1>Fullname</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.address ? 'box-icon-error' : 'box-icon'}>
                                                <IoMdPerson size={35} />
                                            </div>
                                            <input
                                                placeholder='Address'
                                                type='text'
                                                name='address'
                                                defaultValue={props.values.address}
                                                className={errors.address ? 'error-input' : 'input'}
                                                ref={register({required: true, minLength: 3, pattern: /[A-Za-z0-9]/})}
                                            />
                                            {errors.address && console.log(errors)}
                                        </div>
                                    </div>
                                    <div className='addressInfoForm-div-section'>
                                        <h1>Email</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.city ? 'box-icon-error' : 'box-icon'}>
                                                <IoMdMail size={35}/>
                                            </div>
                                            <input
                                                placeholder='City'
                                                type='text'
                                                name='city'
                                                defaultValue={props.values.city}
                                                className={errors.city ? 'error-input' : 'input'}
                                                ref={register({required: true, minLength: 3, pattern: /[A-Za-z]/})}
                                            />
                                            {errors.city && console.log(errors)}
                                        </div>
                                    </div>
                                    <div className='addressInfoForm-div-section'>
                                        <h1>Phone</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.city ? 'box-icon-error' : 'box-icon'}>
                                                <FaPhoneAlt size={35}/>
                                            </div>
                                            <input
                                                placeholder='City'
                                                type='text'
                                                name='city'
                                                defaultValue={props.values.city}
                                                className={errors.city ? 'error-input' : 'input'}
                                                ref={register({required: true, minLength: 3, pattern: /[A-Za-z]/})}
                                            />
                                            {errors.city && console.log(errors)}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='addressInfo-buttons'>
                                <button onClick={back} className='form-backButton' >Back</button>
                                <button 
                                    type="submit" 
                                    className={!formState.isValid ? 'stepform-next-button-disabled' : 'stepform-next-button' }
                                    disabled={!formState.isValid}
                                >Next</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default UserInfo