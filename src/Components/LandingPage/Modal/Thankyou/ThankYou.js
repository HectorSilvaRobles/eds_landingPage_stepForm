import React, {useEffect} from 'react';
import axios from 'axios';
import {MdClose} from 'react-icons/md'
import './thankyou.css'


const Thankyou = (props) => {

    useEffect(() => {
        axios.post(process.env.REACT_APP_NOTIFY_API, props.state)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className='thankyou'>
            <div className='thankyou-space'>
                <MdClose onClick={() => props.handleClose()}/>
            </div>
            <div className='thankyou-body'>
                <h1>Thank You.</h1>
                <h2>One of our representatives will be in contact shortly.</h2>
            </div>
            <div className='thankyou-space'>
            </div>
        </div>
    )
}

export default Thankyou