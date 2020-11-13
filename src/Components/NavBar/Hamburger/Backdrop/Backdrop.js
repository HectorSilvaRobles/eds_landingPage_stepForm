import React from 'react';
import './backdrop.css';

export default function Backdrop(props){
    return <div className='navbar-backdrop' onClick={props.click} />
}