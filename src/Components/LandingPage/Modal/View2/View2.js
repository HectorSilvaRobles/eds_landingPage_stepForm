import React, {Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
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
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                                />
                                <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            )}
                        </PlacesAutocomplete>
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