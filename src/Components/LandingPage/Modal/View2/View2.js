import React, {Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {MdLocationOn} from 'react-icons/md'
import './view2.css'

export default class View2 extends Component {
    constructor(props){
        super(props)

        this.state = { address: ''}
    }

    handleChange = address => {
        this.setState({address})
    }

    render(){
        return (
            <div className='view1'>
                <div className='view-title'>
                    <h1>Property Location</h1>
                    <h2>Where will the estimate be done.</h2>
                </div>
                <div className='view-content'>
                    <div className='view2-form'>
                        <div className='view2-form-input'>
                            <div className='view2-input'>
                                <div className='view2-input-title'><h1>Address</h1></div>
                                <div className='view2-input-field'>
                                    <PlacesAutocomplete
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        onSelect={this.handleSelect}
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps}) => (
                                        <div >
                                            <input
                                            {...getInputProps({
                                                placeholder: 'Enter property location',
                                            })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                                <div>
                                                    {suggestions.map((suggestion, i) => {
                                                        const className = suggestion.active
                                                        ? 'suggestion-item--active'
                                                        : 'suggestion-item';
                                                        
                                                        return (
                                                            <div
                                                                {...getSuggestionItemProps(suggestion, {
                                                                className,
                                                                })}
                                                                key={i}
                                                            >
                                                                <div className='suggestion-item-icon' >
                                                                    <MdLocationOn />
                                                                </div>
                                                                <div className='suggestion-item-words'>
                                                                    <h1>{suggestion.description}</h1>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                    </PlacesAutocomplete>
                                </div>
                            </div>
                        </div>
                        <div className='view2-form-map'></div>
                        
                    </div>
                    <div className='view1-content-button'>
                        <button
                                    // disabled={serviceState.length === 0 || resOrCom === null ? true : false}
                                    // className={serviceState.length === 0 || resOrCom === null ? null : 'modal-button-active'}
                                    // onClick={() => {
                                    //     props.handleUpdate('selected', {'resOrCom': resOrCom, 'services' : serviceState})
                                    //     props.handleView('view2')
                                    // }}
                        >Continue</button>
                    </div>   
                </div>
            </div>
        )
    }
}