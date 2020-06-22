import React, {Component} from 'react';
import './userinfo.css'

export class UserInfo extends Component {
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
                Step 4
                <button onClick={this.continue}>Submit</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default UserInfo