import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal'
import ModalForm from '../Modal/Modal';
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import './cta.css'

const CTA = () => {
     // open modal
     const [open, setOpen] = useState(false)
     const handleOpen = () =>{
         setOpen(true)
     }
     const handleClose = () =>{
         setOpen(false)
     }
    return (
        <div className='cta'>
            <div className='cta-words'>
                <h1>Schedule your free estimate today!</h1>
            </div>
            <div className='cta-button'>
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
    )
}

export default CTA