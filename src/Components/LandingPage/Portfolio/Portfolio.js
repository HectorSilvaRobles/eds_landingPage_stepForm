import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import axios from 'axios'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Popover from '@material-ui/core/Popover'
import {Carousel} from 'react-bootstrap'

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

    // before and after tab
    let [tabState, setTabState] = useState('after')


    // popover
    const [anchorEl, setAnchorEl] = useState(null)
    const handleclick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleclose = () => {
        setAnchorEl(null)
    }
    const popoveropen = Boolean(anchorEl)
   

    // Modal for specific project
    const [open, setOpen] = useState(false)
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}
    const ModalOurWork = () => {
        return (
            <div className='ourwork-modal'>
                <div className='ourwork-images'>
                    <Carousel>
                    {
                        targetWork && tabState === 'after' 
                        ?
                            targetWork.after_imgs.map(val => {
                                return (
                                    <Carousel.Item key={val}>
                                        <img
                                            className='carousel-img'
                                            src={val}
                                        />
                                    </Carousel.Item>
                                )
                            })
                        :
                            targetWork.before_imgs.map(val => {
                                return (
                                    <Carousel.Item key={val}>
                                        <img
                                            className='carousel-img'
                                            src={val}
                                        />
                                    </Carousel.Item>
                                )
                            })
                    }
                    </Carousel>
                </div>
                <div className='ourwork-body'>
                    <div className='ourwork-body-tabs'>
                        <div className='ourwork-tab' id={tabState ==='after' ? 'active-tab' : null} onClick={() => setTabState('after')}>After</div>
                        <div className='ourwork-tab' id={tabState ==='before' ? 'active-tab' : null} onClick={() => setTabState('before')}>Before</div>
                    </div>
                    <div className='ourwork-body-info'>
                        <div className='ourwork-info-description'>
                            <h1>Description</h1>
                            <p>Description of the project, this should be around 2-4 sentences. Advise users of what you did and how your work was worth the business. Keep it simple </p>
                        </div>
                        <div className='ourwork-info-other'>
                            <div className='ourwork-info-other-1'>
                                <h1>Service</h1>
                                <p>{targetWork.type_of_work !== null ? targetWork.type_of_work.map(val => val + ' ') : null}</p>
                            </div>
                            <div className='ourwork-info-other-2'>
                                <h1>Paint Used</h1>
                                <div className='ourwork-paint'>
                                    {
                                        targetWork.paint_used ? 
                                            targetWork.paint_used.map(val => {
                                                return (
                                                    <div key={val[1]}
                                                        className='color-square' 
                                                        style={{background: val[1]}}
                                                        onClick={handleclick}
                                                    />
                                                )
                                            }) 
                                        :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className='portfolio'>
            <div className='portfolio-header'>
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
                                            style={{'background-image': `url(${val.after_imgs[0]})`}}
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
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    className={'modal-div'}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    forwardRef={Modal}
                >
                    {targetWork !== null ? ModalOurWork() : null}
                </Modal>
                <Popover
                    open={popoveropen}
                    anchorEl={anchorEl}
                    onClose={handleclose}
                >
                    {targetWork !== null ? <h1>{targetWork}</h1> : null}
                </Popover>
            </div>
        </div>
    )
}

export default Portfolio