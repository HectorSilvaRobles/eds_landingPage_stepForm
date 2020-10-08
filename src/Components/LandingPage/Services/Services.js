import React, {useState} from 'react'
import drywall from '../../../Assets/drywall.jpg'
import painter from '../../../Assets/painter.jpg'
import './services.css'

const Services = () => {
    const [type, setType] = useState('paint')

    return (
        <div className='services'>
            <div className='services-title'>
                <h1>What We Do</h1>
                <p>See how we can help in completing your project.</p>
            </div>
            <div className='services-body'>
                <div className='service-card'>
                    <div className='service-card-img'>
                        <img src={type === 'paint' ? painter : drywall }/>
                    </div>
                    <div className='service-card-info'>
                        <h1>{type === 'paint' ? 'Paint Service' : 'Drywall Service'}</h1>
                        <p>{type === 'paint' ? 
                        'Our painting experts help in providing our clients with a new fresh coat of paint for both interior and or exterior projects.' 
                        : 
                        'Our painting experts help in providing our clients with a new fresh coat of paint for both interior and or exterior projects.' }
                        </p>
                        <div className='service-card-info-buttons'>
                            <button className={type=== 'paint' ? 'service-card-button-active' : 'service-card-button-inactive'} onClick={() => setType('paint')}>Paint</button>
                            <button className={ type==='drywall' ? 'service-card-button-active' : 'service-card-button-inactive'} onClick={() => setType('drywall')}>Drywall</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services