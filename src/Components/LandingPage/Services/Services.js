import React, {useState} from 'react'
import drywall from '../../../Assets/drywall.jpg'
import painter from '../../../Assets/painter.jpg'
import interior from '../../../Assets/interior.png'
import Modal from '@material-ui/core/Modal'
import ModalForm from '../Modal/Modal';
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import './services.css'

const Services = () => {
    const interiorType = {
        "type" : "interior",
        "name" : "Interior Paint",
        "description" : "Being that the average interior of a home is repainted every three to four years, your investment will eventually need a fresh coat.",
        "image" : interior
    }

    const exteriorType = {
        "type" : "exterior",
        "name" : "Exterior Paint",
        "description" : "Exterior painting is often times affiliated with a drastic change of appeal. Our services are made to help maintain, protect, and enhance your home's look.",
        "image" : painter
    }

    const drywallType = {
        "type" : "drywall",
        "name" : "Drywall",
        "description" : "Create many features such as eaves, arches and other architectural designs. Fully licensed to offer our Drywall services for both residential and commercial properties.",
        "image" : drywall
    }

    const [type, setType] = useState(interiorType)

    // open modal
    const [open, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

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
                        <button onClick={handleOpen}>Get Quote</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            className={'modal-backdrop'}
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >   
                            <Fade in={open}>
                                <ModalForm onClose={handleClose} />
                            </Fade>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services