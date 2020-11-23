import React, {Component} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import {MdLocationOn} from 'react-icons/md'
import GoogleMapReact from 'google-map-react'
import './view2.css'

const AnyReactComponent = () => <div className='map-icon'></div>;

export default class View2 extends Component {
    constructor(props){
        super(props)

        this.state = { 
            address: this.props.state.location.address,
            map : {
                center: {
                    lng: this.props.state.location.lng,
                    lat: this.props.state.location.lat
                },
                zoom: 16
            }
        }
    }

    handleChange = address => {
        this.setState({'address' : address})
    }

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
    };

    handleClick =(address)  => {
        console.log('hit')
        var input = document.getElementById('id_address');
        input.blur();
        this.setState({address: address.description})
        geocodeByAddress(address.description)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.setState({
            map: {
                center: {
                    lat: latLng.lat, lng: latLng.lng
                },
                zoom: 20
            }
        }))
        .catch(error => console.log('error', error))
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
                                        value={this.props.state.location.address ? this.props.state.location.address : this.state.address}
                                        onChange={this.handleChange}
                                        onSelect={this.handleSelect}
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (

                                        <div  >
                                            <input {...getInputProps({placeholder: 'Enter property location'})} id='id_address'/>
                                            <div className="autocomplete-dropdown-container">
                                                {suggestions.map((suggestion, i) => {
                                                    const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                                    return (
                                                        <div {...getSuggestionItemProps(suggestions, { className})} key={i}  >
                                                            <div className='suggestion-item-icon' onClick={() => this.handleClick(suggestion)} >
                                                                <MdLocationOn />
                                                            </div>
                                                            <div className='suggestion-item-words' onClick={() => this.handleClick(suggestion)} >
                                                                <h1>{suggestion.description}</h1>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        )}
                                    </PlacesAutocomplete>
                                </div>
                            </div>
                        </div>
                        <div className='view2-form-map'>
                            <div >
                                <GoogleMapReact
                                    bootstrapURLKeys={{key : process.env.REACT_APP_MAP_API}}
                                    defaultCenter={this.state.map.center}
                                    defaultZoom={this.state.map.zoom}
                                    center={this.state.map.center}
                                >
                                    <AnyReactComponent
                                        lat={this.state.map.center.lat}
                                        lng={this.state.map.center.lng}
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                        
                    </div>
                    <div className='view1-content-button'>
                        <button
                            disabled={this.state.address.length < 6 ? true : false}
                            className={this.state.address.length < 6 ? null : 'modal-button-active'}
                            onClick={() => {
                                this.props.handleUpdate('location', {'address' : this.state.address, 'lng' : this.state.map.center.lng, 'lat' : this.state.map.center.lat})
                                this.props.handleView('view3')
                            }}
                        >Continue</button>
                    </div>   
                </div>
            </div>
        )
    }
}