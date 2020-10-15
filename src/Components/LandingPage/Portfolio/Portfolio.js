import React from 'react';
import Slider from 'react-slick';
import './portfolio.css'

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        cssEase: "linear",
        className: 'ourWork-slider'
    }

    return (
        <div className='portfolio'>
            <div className='portfolio-header'>
                <h1>View Our Work</h1>
                <h2>Take a look at our previous projects, see our results.</h2>
            </div>
            <div className='portfolio-body'>
                <Slider {...settings}>
                    <div>
                        <div className='ourwork-card'>

                        </div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </Slider>
            </div>
        </div>
    )
}

export default Portfolio