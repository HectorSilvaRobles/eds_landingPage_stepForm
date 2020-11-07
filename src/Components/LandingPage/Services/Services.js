import React, {useState} from 'react'
import drywall from '../../../Assets/drywall.jpg'
import painter from '../../../Assets/painter.jpg'
import './services.css'

const Services = () => {
    const [type, setType] = useState('interior')

    return (
        <div className='services'>
            <div className='services-info'>
                <div className='services-info-words'>
                    <h1>Services We Offer</h1>
                    <h2>Choose the type of service that best suits your project needs.</h2>
                </div>
                <div className='services-info-buttons'>
                    <button onClick={() => setType('interior')} className={type === 'interior' ? 'service-button-active' : null} >Interior</button>
                    <button onClick={() => setType('exterior')} className={type === 'exterior' ? 'service-button-active' : null} >Exterior</button>
                    <button onClick={() => setType('drywall')} className={type === 'drywall' ? 'service-button-active' : null} >Drywall</button>
                </div>
            </div>
            <div className='services-card'>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services