import React, {Component} from 'react';

import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials';
import Benefits from './Benefits/Benefits'
import CTA from './CTA/CTA'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Trusted from './Trusted/Trusted'
import './home.css'


export class Home extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Hero />
                <Intro />
                <Services />
                <Portfolio />
                <Testimonials />
                <CTA />
                <About />
                <Trusted />
                <Benefits />
                {/* <Contact /> */}
                <Footer />
            </div>
        )
    }
}

export default Home