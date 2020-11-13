import React, {useState} from 'react'
import {FaHome} from 'react-icons/fa'
import {MdBusiness} from 'react-icons/md'
import './view1.css'


const View1 = (props) => {
    const [resOrCom, setResOrCom] = useState(props.state.selected.resOrCom)

    // add service to state just once
    const [serviceState, setServiceState] = useState(props.state.selected.services)

    const addToService = (service) => {
        if(!serviceState.includes(service)){
            setServiceState(serviceState.concat(service))
        }  else {
            let removed = serviceState.filter((s) => s !== service) 
            setServiceState(removed)
        }
    }


    return (
        <div className='view1'>
            <div className='view-title'>
                <h1>Select Your Service</h1>
                <h2>Let us know how we can help.</h2>
            </div>
            <div className='view-content'>
                <div className='view1-content-body'>
                    <div className='view1-section1'>
                        <div 
                        onClick={() => setResOrCom('residential')}
                        className={resOrCom === 'residential' ? 'option1-active' : null}
                        >
                            <FaHome />
                            <h1>Residential</h1>
                        </div>
                        <div 
                        onClick={() => setResOrCom('commercial')}
                        className={resOrCom === 'commercial' ? 'option1-active' : null}
                        >
                            <MdBusiness />
                            <h1>Commercial</h1>
                        </div>
                    </div>
                    <div className='view1-section2'>
                        <div 
                        onClick={() => addToService('interior paint')} 
                        className={serviceState.includes('interior paint') ? 'option2-active' : null}
                        >Interior Paint</div>
                        <div 
                        onClick={() => addToService('exterior paint')}
                        className={serviceState.includes('exterior paint') ? 'option2-active' : null}
                        >Exterior Paint</div>
                        <div 
                        onClick={() => addToService('drywall')}
                        className={serviceState.includes('drywall') ? 'option2-active' : null}
                        >Drywall</div>
                    </div>
                </div>
                <div className='view1-content-button'>
                    <button
                        disabled={serviceState.length === 0 || resOrCom === null ? true : false}
                        className={serviceState.length === 0 || resOrCom === null ? null : 'modal-button-active'}
                        onClick={() => {
                            props.handleUpdate('selected', {'resOrCom': resOrCom, 'services' : serviceState})
                            props.handleView('view2')
                        }}
                    >Continue</button>
                </div>
            </div>
        </div>
    )
}


export default View1