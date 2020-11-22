import React from 'react';
import './sidedrawer.css';
import {Link} from 'react-scroll';

export default function SideDrawer(props){
    let drawerClasses = 'drawer'

    if(props.show) {
        drawerClasses = 'drawer open'
    }

    return (
        <div className={drawerClasses}>
            <Link
                        activeClass='active-menu'
                        to='hero'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={props.close}

                    >Home</Link>
                    <Link
                        activeClass='active-menu'
                        to='services'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                        onClick={props.close}

                    >Services</Link>
                    <Link
                        activeClass='active-menu'
                        to='portfolio'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={props.close}

                    >Portfolio</Link>
                    <Link
                        activeClass='active-menu'
                        to='testimonials'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                        onClick={props.close}

                    >Testimonials</Link>
                    <Link
                        activeClass='active-menu'
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                        onClick={props.close}

                    >About</Link>
                    <Link
                        activeClass='active-menu'
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={0}
                        onClick={props.close}

                    >Contact</Link>
        </div>
    )
}