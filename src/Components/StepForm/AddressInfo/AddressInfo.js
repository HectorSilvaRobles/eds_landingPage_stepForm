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
                                <div className='addressInfoForm-div'>
                                    <div className='addressInfoForm-div-section'>
                                        <h1>Address</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className='box-icon'>

                                            </div>
                                            <input
                                                placeholder='Address'
                                                type='text'
                                                name='address'
                                                className={errors.address ? 'error-input' : 'input'}
                                                ref={register({required: true, minLength: 3, pattern: /[A-Za-z0-9]/})}
                                            />
                                            {errors.address && console.log(errors)}
                                        </div>
                                    </div>
                                    <div className='addressInfoForm-div-section'>
                                        <h1>City</h1>
                                        <div className='addressInfoForm-div-section-box'>
                                            <div className='box-icon'>

                                            </div>
                                            <input
                                                placeholder='City'
                                                type='text'
                                                name='city'
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
                                                <div className='box-icon'>

                                                </div>
                                                <select 
                                                    name='state' 
                                                    ref={register({required: true, minLength: 1, pattern: /[A-Za-z]/})}
                                                    >
                                                        <option value="" defaultValue>Select a State</option>
                                                        <option value="AL">AL</option>
                                                        <option value="AK">AK</option>
                                                        <option value="AR">AR</option>	
                                                        <option value="AZ">AZ</option>
                                                        <option value="CA">CA</option>
                                                        <option value="CO">CO</option>
                                                        <option value="CT">CT</option>
                                                        <option value="DC">DC</option>
                                                        <option value="DE">DE</option>
                                                        <option value="FL">FL</option>
                                                        <option value="GA">GA</option>
                                                        <option value="HI">HI</option>
                                                        <option value="IA">IA</option>	
                                                        <option value="ID">ID</option>
                                                        <option value="IL">IL</option>
                                                        <option value="IN">IN</option>
                                                        <option value="KS">KS</option>
                                                        <option value="KY">KY</option>
                                                        <option value="LA">LA</option>
                                                        <option value="MA">MA</option>
                                                        <option value="MD">MD</option>
                                                        <option value="ME">ME</option>
                                                        <option value="MI">MI</option>
                                                        <option value="MN">MN</option>
                                                        <option value="MO">MO</option>	
                                                        <option value="MS">MS</option>
                                                        <option value="MT">MT</option>
                                                        <option value="NC">NC</option>	
                                                        <option value="NE">NE</option>
                                                        <option value="NH">NH</option>
                                                        <option value="NJ">NJ</option>
                                                        <option value="NM">NM</option>			
                                                        <option value="NV">NV</option>
                                                        <option value="NY">NY</option>
                                                        <option value="ND">ND</option>
                                                        <option value="OH">OH</option>
                                                        <option value="OK">OK</option>
                                                        <option value="OR">OR</option>
                                                        <option value="PA">PA</option>
                                                        <option value="RI">RI</option>
                                                        <option value="SC">SC</option>
                                                        <option value="SD">SD</option>
                                                        <option value="TN">TN</option>
                                                        <option value="TX">TX</option>
                                                        <option value="UT">UT</option>
                                                        <option value="VT">VT</option>
                                                        <option value="VA">VA</option>
                                                        <option value="WA">WA</option>
                                                        <option value="WI">WI</option>	
                                                        <option value="WV">WV</option>
                                                        <option value="WY">WY</option>
                                                </select>
                                            </div>
                                           
                                        </div>
                                        <div className='addressInfo-zipcode'>
                                            <h1>Zip Code</h1>
                                            <div className='addressInfoForm-div-section-box'>
                                                <div className='box-icon'>

                                                </div>
                                                <input
                                                    placeholder='Zip Code'
                                                    type='text'
                                                    name='zipcode'
                                                    className={errors.zipcode ? 'error-input' : 'input'}
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
                                <button type="submit" disabled={!formState.isValid}>Next</button>
                            </div>
                        </form>
                    </div>
            </div>
            
        </div>
    )
}

export default AddressInfo