import React, {useState} from 'react';
import './addressinfo.css';
import {useForm }from 'react-hook-form';

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
        console.log(data.fullname)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Step 2
            <button type="submit" disabled={!formState.isValid}>Next</button>
            <button onClick={back} >Back</button>
        </form>
    )
}

export default AddressInfo