import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import axios from 'axios'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import WorkModal from './WorkModal/WorkModal'
import './portfolio.css'

const Portfolio = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        cssEase: "linear",
        className: 'ourWork-slider',
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
    }


    // Get our work data from database
    let [ourWorkData, setOurWorkData] = useState(null)
    let [targetWork, setTargetWork] = useState(null)
    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_OUR_WORK_API)
        .then(res => setOurWorkData(res.data))
        .catch(err => console.log(err))
    },[])


    // Modal for specific project
    const [open, setOpen] = useState(false)
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}

    return (
        <div className='portfolio' >
            <div className='portfolio-header' id='portfolio'>
                <h1>Work We've Done</h1>
                <h2>Check out the projects completed in the past by our team.</h2>
            </div>
            <div className='portfolio-body'>
                <Slider {...settings}>
                    {ourWorkData ?
                        ourWorkData.body.map(val => {
                            return (
                                <div key={val.id}>
                                    <div className='ourwork-card'>
                                        <div 
                                            className='ow-card' 
                                            style={{'backgroundImage': `url(${val.after_imgs[0]})`}}
                                        >
                                            <div className='ow-card-background' >
                                                <div className='ow-card-type'>
                                                    {val.type_of_work.join(' | ')}
                                                </div>
                                                <div className='ow-card-button'>
                                                    <button onClick={() => {
                                                        handleOpen()
                                                        setTargetWork(val)
                                                    }}>View More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    :
                    null
                    }
                </Slider>
                <Modal
                    open={open}
                    onClose={handleClose}
                    className={'modal-div'}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    {targetWork !== null ? <WorkModal handleClose={handleClose} selectedProj={targetWork} />  : null}
                </Modal>
            </div>
        </div>
    )
}

export default Portfolio