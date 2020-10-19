import React, {Component} from 'react';

import Hero from './Hero/Hero'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials';
import Benefits from './Benefits/Benefits'

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
                <Portfolio />
                <Services />
                <Testimonials />
                <Benefits />
            </div>
        )
    }
}

export default Home