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
        console.log(data)
        const {fullname, email, phone} = data
        props.handleChange([
            {
                "type":"fullname",
                "value": fullname.toUpperCase()
            },
            {
                "type":"email",
                "value": email.toUpperCase()
            },
            {
                "type":"phone",
                "value": phone.toUpperCase()
            }
        ])
        next()
    }

    
    return (
        <div className='stepform'>
            <div className='addressInfo userInfo'>
                    <div className='addressInfo-title userInfo-title'>
                        <h1>Contact Information</h1>
                        <p>Let us know where to be.</p>
                    </div>
                    <div className='addressInfo-body userInfo-body'>
                        <div className='property_info_body_steps userInfo-body-steps'>
                            <StepFormDots values={props.values} currentStep={props.values.step} setStep={props.setStep} />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='addressForm userForm'>
                            <div className='addressInfo-form'>
                                <div className='addressInfoForm-div userInfoForm-div'>
                                    <div className='addressInfoForm-div-section .userInfoForm-div-section'>
                                        <h1>Fullname</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.fullname ? 'box-icon-error' : 'box-icon'}>
                                                <IoMdPerson size={35} />
                                            </div>
                                            <input
                                                placeholder='Fullname'
                                                type='text'
                                                name='fullname'
                                                defaultValue={props.values.fullname}
                                                className={errors.fullname ? 'error-input' : 'input'}
                                                ref={register({required: true, minLength: 3, pattern: /[A-Za-z]/})}
                                            />
                                            {errors.fullname && console.log(errors)}
                                        </div>
                                    </div>
                                    <div className='addressInfoForm-div-section'>
                                        <h1>Email</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.email ? 'box-icon-error' : 'box-icon'}>
                                                <IoMdMail size={35}/>
                                            </div>
                                            <input
                                                placeholder='Email'
                                                type='text'
                                                name='email'
                                                defaultValue={props.values.email}
                                                className={errors.email ? 'error-input' : 'input'}
                                                ref={register({required: true, minLength: 5, pattern: /[A-Za-z0-9]/})}
                                            />
                                            {errors.email && console.log(errors)}
                                        </div>
                                    </div>
                                    <div className='addressInfoForm-div-section'>
                                        <h1>Phone</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.phone ? 'box-icon-error' : 'box-icon'}>
                                                <FaPhoneAlt size={35}/>
                                            </div>
                                            <input
                                                placeholder='Phone'
                                                type='text'
                                                name='phone'
                                                defaultValue={props.values.phone}
                                                className={errors.phone ? 'error-input' : 'input'}
                                                ref={register({required: true, minLength: 3, pattern: /[0-9]/})}
                                            />
                                            {errors.phone && console.log(errors)}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='addressInfo-buttons userInfo-buttons'>
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