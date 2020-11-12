import React, {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {ImArrowLeft} from 'react-icons/im'
import View1 from './View1/View1'
import './modal.css'


export default class Modal extends Component {
    constructor(props){
        super(props)

        this.state = {
            view: 'view1'
        }
    }

    handleView = (view) => {
        this.setState({view: view})
    }

    render() {
        return (
            <div className='modal-form'>
                <div className='modal-form-top'>
                    <div className='modal-form-top-space'>
                        {this.state.view === 'view2' ? <ImArrowLeft onClick={() => this.handleView('view1')} /> : null}
                    </div>
                    <div className='modal-form-top-dots'>
                        <div onClick={() => this.handleView('view1')} className={this.state.view === 'view1' ? 'modal-dot-active' : null} />
                        <div onClick={() => this.handleView('view2')} className={this.state.view === 'view2' ? 'modal-dot-active' : null} />
                    </div>
                    <div className='modal-form-top-space'>
                        <IoMdClose onClick={this.props.onClose} />
                    </div>
                </div>
                <div className='modal-form-body'>
                    {this.state.view === 'view1' ? 
                        <View1 />
                        :
                        null
                    }
                    {this.state.view === 'view2' ? 
                        <div>
                            View 2
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}