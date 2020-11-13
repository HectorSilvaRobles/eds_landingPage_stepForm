import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='contact-title'>
                <h1>Get In Contact</h1>
                <h2>Here are some of the ways you can reach out and get in contact with our team.</h2>
                <button>Get Quote</button>
            </div>
            <div className='contact-info'>
                <div>
                    <h1>Paint</h1>
                    <h2>Edrel  ||  907-854-4152</h2>
                    <h2>Daniel  ||  928-750-3529</h2>
                </div>
                <div>
                    <h1>Drywall</h1>
                    <h2>Edson || 408-273-9971</h2>
                    <h2>Edrel  ||  907-854-4152</h2>
                </div>
            </div>
        </div>
    )
}

export default Contact