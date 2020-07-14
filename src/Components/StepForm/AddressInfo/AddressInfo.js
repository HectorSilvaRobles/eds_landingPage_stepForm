import React, {useState} from 'react';
import './addressinfo.css';
import {useForm }from 'react-hook-form';
import StepFormDots from '../StepFormDots/StepFormDots'
import {FaHome, FaCity, FaLocationArrow, FaMapMarkerAlt} from 'react-icons/fa'

const AddressInfo = (props) => {
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
                                        <h1>Address</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.address ? 'box-icon-error' : 'box-icon'}>
                                                <FaHome size={35} />
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
                                        <h1>City</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className={errors.city ? 'box-icon-error' : 'box-icon'}>
                                                <FaCity size={35}/>
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
                                    <div className='addressInfoForm-div-section2'>
                                        <div className='addressInfo-state'>
                                            <h1>State</h1>
                                            <div className='addressInfoForm-div-section-box'>
                                                <div className={errors.state ? 'box-icon-error' : 'box-icon'}>
                                                    <FaMapMarkerAlt size={30} />
                                                </div>
                                                <input
                                                    placeholder='State'
                                                    type='text'
                                                    name='state'
                                                    defaultValue={props.values.state}
                                                    className={errors.state ? 'error-input2' : 'input2'}
                                                    ref={register({required: true, minLength: 1, pattern: /[A-Za-z]/})}
                                                />
                                                {errors.state && console.log(errors)}
                                            </div>
                                           
                                        </div>
                                        <div className='addressInfo-zipcode'>
                                            <h1>Zip Code</h1>
                                            <div className='addressInfoForm-div-section-box'>
                                                <div className={errors.zipcode ? 'box-icon-error' : 'box-icon'}>
                                                    <FaLocationArrow size={30} />
                                                </div>
                                                <input
                                                    placeholder='Zip Code'
                                                    type='text'
                                                    name='zipcode'
                                                    defaultValue={props.values.zipcode}
                                                    className={errors.zipcode ? 'error-input2' : 'input2'}
                                                    ref={register({required: true, minLength: 3, pattern: /[0-9]/})}
                                                />
                                                {errors.zipcode && console.log(errors)}
                                            </div>
                                            
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

export default AddressInfo