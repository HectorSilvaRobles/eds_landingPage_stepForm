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
                <div 
                    onClick={this.props.handleChange({'type':'intr_extr_both', 'value':'Interior'})}
                    style={{'width': '100px', 'height':'100px', 'background':'red'}}
                 />
                <div 
                    onClick={this.props.handleChange({'type':'intr_extr_both', 'value':'Exterior'})}
                    style={{'width': '100px', 'height':'100px', 'background':'blue'}}
                 />
                Step 1
                <button onClick={this.continue}>Next</button>
            </div>
        )
    }
}

export default PropertyInfo