import React, {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {ImArrowLeft} from 'react-icons/im'
import View1 from './View1/View1'
import View2 from './View2/View2'
import View3 from './View3/View3'
import Confirmation from './Confirmation/Confirmation'
import ThankYou from './Thankyou/ThankYou'
import './modal.css'


export default class Modal extends Component {
    constructor(props){
        super(props)

        this.state = {
            view: 'view1',
            selected: {'resOrCom' : null, 'services' : []},
            location: {'address' : '', 'lng' :  -114.78, 'lat' : 32.4870},
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
            <div className={this.state.view === 'thankyou' ? 'modal-thank' : 'modal-form'}>
                {this.state.view === 'thankyou' ? 
                    null
                    :
                    <div className='modal-form-top'>
                        <div className='modal-form-top-space'>
                            {this.state.view === 'view2' || this.state.view === 'view3' ? <ImArrowLeft onClick={this.state.view === 'view2' ? () => this.handleView('view1') : () => this.handleView('view2')} /> : null}
                        </div>
                        {this.state.view === 'confirmation' ? <div className='modal-form-top-dots' /> : 
                        <div className='modal-form-top-dots'>
                            <button 
                                onClick={() => this.handleView('view1')} 
                                className={this.state.view === 'view1' ? 'modal-dot-active' : null} 
                            />
                            <button 
                                onClick={() => this.handleView('view2')} 
                                className={this.state.view === 'view2' ? 'modal-dot-active' : null} 
                                disabled={!this.state.selected.resOrCom || !this.state.selected.services.length > 0 ?  true : false}
                                id={!this.state.selected.resOrCom || !this.state.selected.services.length > 0 ? 'modal-dot-disabled' : null}
                            />
                            <button 
                                onClick={() => this.handleView('view3')} 
                                className={this.state.view === 'view3' ? 'modal-dot-active' : null}
                                disabled={!this.state.location.address ?  true : false}
                                id={!this.state.location.address ?  'modal-dot-disabled' : null}
                            />
                        </div>
                        }

                        <div className='modal-form-top-space'>
                            <IoMdClose onClick={this.props.onClose} />
                        </div>
                    </div>
                }
                <div className={this.state.view==='thankyou' ? 'modal-thankyou-body' : 'modal-form-body'}>
                    {this.state.view === 'view1' ? 
                        <View1
                            state={this.state}
                            handleView={this.handleView}
                            handleUpdate={this.handleUpdateForm}
                         />
                        :
                        null
                    }
                    {this.state.view === 'view2' ? 
                        <View2
                            state={this.state}
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
                            state={this.state}
                         />
                        :
                        null
                    } 
                    {this.state.view === 'confirmation' ? 
                        <Confirmation />
                        :
                        null
                    }
                    {this.state.view === 'thankyou' ?
                        <ThankYou
                            handleClose={this.props.onClose}
                            state={this.state}
                         />
                        : 
                        null
                    }
                </div>
            </div>
        )
    }
}