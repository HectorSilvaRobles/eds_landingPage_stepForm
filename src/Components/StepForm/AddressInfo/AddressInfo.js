import React, {useState} from 'react';
import './addressinfo.css';
import {useForm }from 'react-hook-form';

const AddressInfo = (props) => {

    const [fullname, setFullName] = useState('')
    const next = (e) => {
        e.preventDefault();
        props.nextStep()
    }

    let back = e => {
        e.preventDefault();
        props.prevStep();
    }

    return (
        <div>
            <input
                placeholder='fullname'
                type='text'
                // onChange={(e) => console.log(props.handleChange)}
                onChange={ e => props.handleChange({'type' : 'fullname', 'value' : e.target.value })}
             />
            Step 2
            <button onClick={next}>Next</button>
            <button onClick={back}>Back</button>
        </div>
    )
}

export default AddressInfo