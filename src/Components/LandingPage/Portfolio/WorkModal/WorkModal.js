import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'
import {MdClose} from 'react-icons/md'
import './workmodal.css'

export default class WorkModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            tabOption: 'after'
        }
    }

    render(){
        return (
            <div className='workmodal'>
                <div className='workmodal-images'>
                    <div className='modal-exit'>
                        <div className='modal-exit-space'></div>
                        <div className='modal-exit-real'><MdClose onClick={() => this.props.handleClose()} /></div>
                    </div>
                    <Carousel>
                        {
                            this.state.tabOption === 'after' ? 
                                this.props.selectedProj.after_imgs.map((val, i) => {
                                    return (
                                        <Carousel.Item key={i}>
                                            <img
                                                className='carousel-img'
                                                src={val}
                                                alt={'View our work in more detail. Arizona quailty exterior and interior painting.'}
                                            />
                                        </Carousel.Item>
                                    )
                                }) 
                                : 
                                this.props.selectedProj.before_imgs.map((val, i) => {
                                    return (
                                        <Carousel.Item key={i}>
                                            <img
                                                className='carousel-img'
                                                src={val}
                                                alt={'View our work in more detail. Arizona quailty exterior and interior painting.'}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                        }
                    </Carousel>
                </div>
                <div className='workmodal-info'>
                    <div className='workmodal-info-tabs'>
                        <button onClick={() => this.setState({tabOption: 'after'})} className={this.state.tabOption === 'after' ? 'tab-active' : null} >After</button>
                        <button onClick={() => this.setState({tabOption: 'before'})} className={this.state.tabOption === 'before' ? 'tab-active' : null} >Before</button>
                    </div>
                    <div className='workmodal-info-words'></div>
                </div>
            </div>
        )
    }
}