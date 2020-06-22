import React, {Component} from 'react';
import './propertyinfo.css'

export class PropertyInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    render(){
        return (
            <div>
                Step 1
                <button onClick={this.continue}>Next</button>
            </div>
        )
    }
}

export default PropertyInfo