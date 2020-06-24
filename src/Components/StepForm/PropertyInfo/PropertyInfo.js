import React, {Component} from 'react';
import './propertyinfo.css'
import {FaHome} from 'react-icons/fa'
import {MdBusiness} from 'react-icons/md'

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
            <div className='stepform'>
                <div className='property_info'>
                    <div className='property_info_title'>
                        <h1>Type Of Work</h1>
                        <p>Select what you need done.</p>
                    </div>
                    <div className='property_info_body'>
                        <div className='property_info_body_steps'>

                        </div>
                        <div className='property_info_body_selects'>
                            <div className='res_or_com'>
                                <div className='res_or_com-select'>
                                    <FaHome />
                                    <h1>Residential</h1>
                                </div>
                                <div className='res_or_com-select'>
                                    <MdBusiness />
                                    <h1>Commerical</h1>
                                </div>
                            </div>
                            <div className='intr_extr_both'>
                                <div className='intr_extr_both-select'>Interior</div>
                                <div className='intr_extr_both-select'>Exterior</div>
                                <div className='intr_extr_both-select'>Both</div>
                            </div>
                        </div>
                        <div className='property_info_body_submit'>Next</div>
                    </div>

                    {/* <div 
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
                    <button disabled={res_or_com == null || intr_extr_both == null ? true : false} onClick={this.continue}>Next</button> */}
                </div>
            </div>
        )
    }
}

export default PropertyInfo