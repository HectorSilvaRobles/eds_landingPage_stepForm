import React, {useState} from 'react'
import drywall from '../../../Assets/drywall.jpg'
import painter from '../../../Assets/painter.jpg'
import interior from '../../../Assets/interior.png'
import './services.css'

const Services = () => {
    const interiorType = {
        "type" : "interior",
        "name" : "Interior Paint",
        "description" : "Include a short description of service. It should be around 3-4 sentences. Keep it simple and to the point.",
        "image" : interior
    }

    const exteriorType = {
        "type" : "exterior",
        "name" : "Exterior Paint",
        "description" : "Include a short description of service. It should be around 3-4 sentences. Keep it simple and to the point.",
        "image" : painter
    }

    const drywallType = {
        "type" : "drywall",
        "name" : "Drywall",
        "description" : "Include a short description of service. It should be around 3-4 sentences. Keep it simple and to the point.",
        "image" : drywall
    }

    const [type, setType] = useState(interiorType)

    return (
        <div className='services' id='services'>
            <div className='services-info'>
                <div className='services-info-words'>
                    <h1>Services We Offer</h1>
                    <h2>Choose the type of service that best suits your project needs.</h2>
                </div>
                <div className='services-info-buttons'>
                    <button onClick={() => setType(interiorType)} className={type.type === 'interior' ? 'service-button-active' : null} >Interior</button>
                    <button onClick={() => setType(exteriorType)} className={type.type === 'exterior' ? 'service-button-active' : null} >Exterior</button>
                    <button onClick={() => setType(drywallType)} className={type.type === 'drywall' ? 'service-button-active' : null} >Drywall</button>
                </div>
            </div>
            <div className='services-card'>
                <div>
                    <div className='service-card-image'>
                        <img src={type.image} />
                    </div>
                    <div className='service-card-info'>
                        <h1>{type.name}</h1>
                        <p>{type.description}</p>
                        <button>Get Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services