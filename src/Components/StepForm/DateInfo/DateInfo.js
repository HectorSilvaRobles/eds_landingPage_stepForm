import React, {Component} from 'react';
import './dateinfo.css'

export class DateInfo extends Component {
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
                Step 3
                <button onClick={this.continue}>Next</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default DateInfo