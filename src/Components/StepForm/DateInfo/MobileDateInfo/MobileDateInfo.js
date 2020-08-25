import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop'
import './mobiledateinfo.css'

export class MobileDateInfo extends Component {
    constructor(props){
        super(props)
            this.state = {
                dateModal: false,
                timeModal: false
            }
    }

    // open modal based on which type
    openModal = (type) => {
        // console.log(type)
        if(type == 'dateModal'){
            this.setState({
                dateModal: true,
                timeModal: false
            })
        } else if(type == 'timeModal'){
            this.setState({
                dateModal: false,
                timeModal: true
            })
        }
    }


    render() {
        console.log(this.state)
        return (
            <div className='dateInfo-mobile'>
                <div className='dateInfo-mobile-header'>
                    <div className='dateInfo-mobile-header-div'>
                        <h1></h1>
                        <h2></h2>
                    </div>
                </div>
                <div className='dateInfo-mobile-body'>
                    <div 
                        className='dateInfo-mobile-body-modal' 
                        onClick={() => this.openModal('dateModal')}
                    >Date</div>
                    <Modal
                        open={this.state.dateModal}
                        onClose={() => this.setState({dateModal: false})}
                        className='backdrop-modal'
                    >
                        <div className='dateInfo-modal-div'>
                            <div className='dateInfo-modal-div-header'></div>
                            <div className='dateInfo-modal-div-body'></div>
                            <div className='dateInfo-modal-div-button'></div>
                        </div>
                    </Modal>
                    <div 
                        className='dateInfo-mobile-body-modal'
                        onClick={() => this.openModal('timeModal')}
                    >Time</div>
                    <Modal
                        open={this.state.timeModal}
                        onClose={() => this.setState({timeModal: false})}
                        className='backdrop-modal'
                    >
                        <div className='dateInfo-modal-div'>
                            <div className='dateInfo-modal-div-header'></div>
                            <div className='dateInfo-modal-div-body'></div>
                            <div className='dateInfo-modal-div-button'></div>
                        </div>
                        
                    </Modal>
                </div>

            </div>
        )
    }
}

export default MobileDateInfo
