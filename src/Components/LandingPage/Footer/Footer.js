import React from 'react'
import {Link} from 'react-scroll'
import logo from '../../../Assets/logo1.png'
import "./footer.css"


const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <div className='footer-logo'><img src={logo} /></div>
                <div className='footer-menu'>
                <Link
                        activeClass='active-menu'
                        to='hero'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >Home</Link>
                    <Link
                        activeClass='active-menu'
                        to='services'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >Services</Link>
                    <Link
                        activeClass='active-menu'
                        to='portfolio'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                    >Portfolio</Link>
                    <Link
                        activeClass='active-menu'
                        to='testimonials'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >Testimonials</Link>
                    <Link
                        activeClass='active-menu'
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >About</Link>
                    <Link
                        activeClass='active-menu'
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                    >Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer