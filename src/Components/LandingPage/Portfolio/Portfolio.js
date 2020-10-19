import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import axios from 'axios'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Popover from '@material-ui/core/Popover';
import './portfolio.css'

const Portfolio = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        cssEase: "linear",
        className: 'ourWork-slider',
        autoPlaySpeed: 1000
    }


    // Get our work data from database
    let [ourWorkData, setOurWorkData] = useState(null)
    let [targetWork, setTargetWork] = useState(null)
    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_OUR_WORK_API)
        .then(res => setOurWorkData(res.data))
        .catch(err => console.log(err))
    },[])


    // Popover for project colors
    const [anchorEl, setAnchorEl] = useState(null)
    const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget)
    const handlePopoverClose = () => setAnchorEl(null)
    const popoverOpen = Boolean(anchorEl)


    // Modal for specific project
    const [open, setOpen] = useState(false)
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}

    const ModalOurWork = () => {
        return (
            <div className='ourwork-modal'>
                <div className='ourwork-images'></div>
                <div className='ourwork-body'>
                    <div className='ourwork-body-tabs'>
                        <div className='ourwork-tab'>After</div>
                        <div className='ourwork-tab'>Before</div>
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
                                                        onMouseEnter={handlePopoverOpen}
                                                        onMouseLeave={handlePopoverClose}
                                                    >
                                                        <Popover
                                                            anchorEl={anchorEl}
                                                            open={popoverOpen}
                                                            className='project-color-popover'
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'left',
                                                            }}
                                                            transformOrigin={{
                                                                vertical: 'center',
                                                                horizontal: 'center',
                                                            }}
                                                            onClose={handlePopoverClose}
                                                            disableRestoreFocus
                                                        >
                                                            <h1>{val[0]}</h1>
                                                        </Popover>
                                                    </div>
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
                <h1>View Our Work</h1>
                <h2>Take a look at our previous projects, see our results.</h2>
            </div>
            <div className='portfolio-body'>
                <Slider {...settings}>
                    {ourWorkData ?
                        ourWorkData.body.map(val => {
                            return (
                                <div key={val.id}>
                                    <div className='ourwork-card'>
                                        <div className='ow-card'>
                                            <div className='ow-card-img'>
                                                <img src={val.after_imgs[0]}/>
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
                >
                    {targetWork !== null ? ModalOurWork() : null}
                </Modal>
            </div>
        </div>
    )
}

export default Portfolio