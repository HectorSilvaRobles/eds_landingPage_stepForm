import React, {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {ImArrowLeft} from 'react-icons/im'
import View1 from './View1/View1'
import View2 from './View2/View2'
import View3 from './View3/View3'
import './modal.css'


export default class Modal extends Component {
    constructor(props){
        super(props)

        this.state = {
            view: 'view1',
            selected: {},
            location: {},
            personal: {}
        }
    }

    handleView = (view) => {
        this.setState({view: view})
    }

    handleUpdateForm = (type, value) => {
        this.setState({[type]: value})
    }

    render() {
        return (
            <div className='modal-form'>
                <div className='modal-form-top'>
                    <div className='modal-form-top-space'>
                        {this.state.view === 'view2' || this.state.view === 'view3' ? <ImArrowLeft onClick={this.state.view === 'view2' ? () => this.handleView('view1') : () => this.handleView('view2')} /> : null}
                    </div>
                    <div className='modal-form-top-dots'>
                        <div onClick={() => this.handleView('view1')} className={this.state.view === 'view1' ? 'modal-dot-active' : null} />
                        <div onClick={() => this.handleView('view2')} className={this.state.view === 'view2' ? 'modal-dot-active' : null} />
                        <div onClick={() => this.handleView('view3')} className={this.state.view === 'view3' ? 'modal-dot-active' : null} />
                    </div>
                    <div className='modal-form-top-space'>
                        <IoMdClose onClick={this.props.onClose} />
                    </div>
                </div>
                <div className='modal-form-body'>
                    {this.state.view === 'view1' ? 
                        <View1
                            handleView={this.handleView}
                            handleUpdate={this.handleUpdateForm}
                         />
                        :
                        null
                    }
                    {this.state.view === 'view2' ? 
                        <View2
                            handleView={this.handleView}
                            handleUpdate={this.handleUpdateForm}
                         />
                        :
                        null
                    }
                    {this.state.view === 'view3' ? 
                        <View3
                            handleView={this.handleView}
                            handleUpdate={this.handleUpdateForm}
                         />
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}