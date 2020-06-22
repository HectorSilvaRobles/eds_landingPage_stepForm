import React, {Component} from 'react';
import './addressinfo.css'

export class AddressInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    
    render(){
        return (
            <div>
                Step 2
                <button onClick={this.continue}>Next</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default AddressInfo