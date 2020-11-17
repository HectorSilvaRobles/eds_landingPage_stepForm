import React, {Component} from 'react';
import './propertyinfo.css'
import {FaHome} from 'react-icons/fa'
import {MdBusiness} from 'react-icons/md'
import StepFormDots from '../StepFormDots/StepFormDots'

import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import {MdLocationOn} from 'react-icons/md'

export class PropertyInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            res_or_com: this.props.values.res_or_com,
            intr_extr_both: this.props.values.intr_extr_both,
            address: null
        }
    }

    handleChange = address => {
        this.setState({address})
    }

    handleSelect = address => {
        console.log(address)
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
    };

    handleClick =(address)  => {
        console.log('hit')
        var input = document.getElementById('id_address');
        input.blur();
        geocodeByAddress(address.description)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.setState({address: address.description, lat: latLng.lat, long: latLng.lng}))
        .catch(error => console.log('error', error))
    }

    continue = e => {
        e.preventDefault();
        this.props.handleChange([
                {
                    "type":"res_or_com", 
                    "value": this.state.res_or_com
                },
                {
                    "type": "intr_extr_both",
                    "value": this.state.intr_extr_both
                }
            ])
        this.props.nextStep()
    }
    

    render(){
        const {res_or_com, intr_extr_both} = this.state
        return (
            <div className='stepform'>
                <PlacesAutocomplete
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        onSelect={this.handleSelect}
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                        <div >
                                            <input {...getInputProps({placeholder: 'Enter property location'})} id='id_address'/>
                                            <div className="autocomplete-dropdown-container">
                                                {suggestions.map((suggestion, i) => {
                                                    const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                                    return (
                                                        <div disabled={false} {...getSuggestionItemProps(suggestions, { className})} key={i} onClick={() => this.handleClick(suggestion)} >
                                                            <div className='suggestion-item-icon' >
                                                                <MdLocationOn />
                                                            </div>
                                                            <div className='suggestion-item-words' >
                                                                <h1>{suggestion.description}</h1>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        )}
                                    </PlacesAutocomplete>
                <div className='property_info'>
                    <div className='property_info_title'>
                        <h1>Type Of Work</h1>
                        <p>Select what you need done.</p>
                    </div>
                    <div className='property_info_body'>
                        <div className='property_info_body_steps'>
                            <StepFormDots values={this.props.values} currentStep={this.props.values.step} setStep={this.props.setStep} />
                        </div>
                        <div className='property_info_body_selects'>
                            <div className='res_or_com'>
                                <div 
                                    onClick={() => this.setState({res_or_com: 'Residential'})}
                                    className={this.state.res_or_com == 'Residential' ? 'res_or_com-active': 'res_or_com-select'}
                                 >
                                    <FaHome />
                                    <h1>Residential</h1>
                                </div>
                                <div 
                                    onClick={() => this.setState({res_or_com: 'Commercial'})}
                                    className={this.state.res_or_com == 'Commercial' ? 'res_or_com-active': 'res_or_com-select'}
                                >
                                    <MdBusiness />
                                    <h1>Commerical</h1>
                                </div>
                            </div>
                            <div className='intr_extr_both'>
                                <div 
                                    className={this.state.intr_extr_both == 'Interior' ? 'intr_extr_both-active' : 'intr_extr_both-select'}
                                    onClick={()=> this.setState({intr_extr_both: 'Interior'})}
                                >Interior</div>
                                <div 
                                    className={this.state.intr_extr_both == 'Exterior' ? 'intr_extr_both-active' : 'intr_extr_both-select'}
                                    onClick={()=> this.setState({intr_extr_both: 'Exterior'})}
                                >Exterior</div>
                                <div 
                                    onClick={()=> this.setState({intr_extr_both: 'Both'})}
                                    className={this.state.intr_extr_both == 'Both' ? 'intr_extr_both-active' : 'intr_extr_both-select'}
                                >Both</div>
                            </div>
                        </div>
                        <button 
                            disabled={res_or_com == null || intr_extr_both == null ? true : false}
                            onClick={this.continue}
                            className={res_or_com == null || intr_extr_both == null ? 'property_info_body_disabled' : 'property_info_body_submit'}
                        >continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PropertyInfo