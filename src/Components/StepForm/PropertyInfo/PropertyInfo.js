import React, {Component} from 'react';
import './propertyinfo.css'

export class PropertyInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            res_or_com: this.props.values.res_or_com,
            intr_extr_both: this.props.values.intr_extr_both
        }
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
            <div>
                <div 
                    // onClick={this.props.handleChange({'type':'intr_extr_both', 'value':'Interior'})}
                    onClick={() => this.setState({res_or_com: 'Residential'})}
                    style={{'width': '100px', 'height':'100px', 'background':'red'}}
                 />
                <div 
                    onClick={() => this.setState({res_or_com: 'Commerical'})}
                    // onClick={this.props.handleChange({'type':'intr_extr_both', 'value':'Exterior'})}
                    style={{'width': '100px', 'height':'100px', 'background':'blue'}}
                 />
                 <div 
                    onClick={() => this.setState({intr_extr_both: 'Interior'})}
                    // onClick={this.props.handleChange({'type':'intr_extr_both', 'value':'Exterior'})}
                    style={{'width': '200px', 'height':'50px', 'background':'green'}}
                 />
                Step 1
                <button disabled={res_or_com == null || intr_extr_both == null ? true : false} onClick={this.continue}>Next</button>
            </div>
        )
    }
}

export default PropertyInfo