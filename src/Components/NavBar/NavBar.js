import React, { Component } from 'react'
import {Link} from 'react-scroll'
import Backdrop from './Hamburger/Backdrop/Backdrop'
import SideDrawer from './Hamburger/SideDrawer/SideDrawer'
import ToggleButton from './Hamburger/ToggleButton/ToggleButton'
import './navbar.css'

export class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={drawerOpen : false}
    }

    drawerToggleClick = () => {
        this.setState(!this.state.drawerOpen)
    }

    backdropClick = () => {
        this.setState(false)
    }

    render() {
        return (
            <div className='nav'>
                <div className='navbar-logo'></div>
                <div className='navbar-menu'>
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
                <div className='togglebutton'>
                    <ToggleButton click={this.drawerToggleClick} />
                    <SideDrawer show={this.state.drawerOpen} close={this.drawerToggleClick} />
                    {this.state.drawerOpen !== false ? <Backdrop click={this.backdropClick} /> : null}
                </div>
            </div>
        )
    }
}

export default NavBar
