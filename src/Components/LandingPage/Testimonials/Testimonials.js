import React from 'react'
import Slider from 'react-slick'
import {FaQuoteLeft}  from 'react-icons/fa'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './testimonials.css'


const Testimonials = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,
        speed: 3500,
        dots: false,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 1,
                    vertical : false,
                    verticalSwiping: false,
                }
            }
        ]
    }
    return (
        <div className='testimonials'>
            <div className='testimonials-div-info'>
                <h1>Our Clients Love What We Do</h1>
                <h2>See what our previous clients have to say about our work.</h2>
            </div>
            <div className='testimonials-div-testimonials'>
                <div>
                    <Slider {...settings}>
                        <div className='testimonial-slider'>
                            <div>
                                <div className='testimonial-slider-icon'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='testimonial-slider-info'>
                                    <h1>I knew I was right when I called you! 10 stars to these two hard working guys! Thank you it turned out beautiful!</h1>
                                    <h2>Casiyas Alin</h2>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-slider'>
                            <div>
                                <div className='testimonial-slider-icon'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='testimonial-slider-info'>
                                    <h1>Super contenta con el trabajo de EDS Custom Coating. Excelente equipo de trabajo.</h1>
                                    <h2>Jackelyn Ochoa</h2>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-slider'>
                            <div>
                                <div className='testimonial-slider-icon'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='testimonial-slider-info'>
                                    <h1>Thank you to your company and the excellent service provided by your team. Highly recommend!</h1>
                                    <h2>Nery Lansman</h2>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-slider'>
                            <div>
                                <div className='testimonial-slider-icon'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='testimonial-slider-info'>
                                    <h1>WOW super impressed, thanks EDS excellent job!</h1>
                                    <h2>Vivian Garcia</h2>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-slider'>
                            <div>
                                <div className='testimonial-slider-icon'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='testimonial-slider-info'>
                                    <h1>Very professional work recommended</h1>
                                    <h2>Kasandra Rascon</h2>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials