import React, {useState} from 'react'
import heroImage from '../../../Assets/hero.jpg'
import heroImageMobile from '../../../Assets/heromobile.jpg'
import Modal from '@material-ui/core/Modal'
import ModalForm from '../Modal/Modal';
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import './hero.css'

const Hero = () => {
    // open modal
    const [open, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

    return (
        <div className='hero' id='home'>
            <img src={heroImage} alt='hero image' className='reghero' />
            <img src={heroImageMobile} alt='hero image' className='mobilehero' />
            <div className='hero-info'>
                <div className='hero-info-words'>
                    <h1>Arizona Paint & Coating Solutions</h1>
                    <h2>We offer quality services for both home owners and businesses.</h2>
                </div>
                <div className='hero-info-buttons'>
                        <button 
                            className='hero-quote-button' 
                            onClick={handleOpen}
                        >Get Quote</button>
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
                        <button className='hero-learn-button' >Learn More</button>
                </div>
            </div>
        </div>
        
    )
}

export default Hero