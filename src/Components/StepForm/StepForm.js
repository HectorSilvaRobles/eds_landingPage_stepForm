import React, {Component} from 'react';
import './stepform.css'
import PropertyInfo from './PropertyInfo/PropertyInfo'
import AddressInfo from './AddressInfo/AddressInfo'
import DateInfo from './DateInfo/DateInfo'
import UserInfo from './UserInfo/UserInfo'

export class StepForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            step: 1,

        }
    }

    // Go to next step
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

     // Go back to previous step
     prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    render(){
        const {step} = this.state
        
        switch(step){
            case 1:
                return (
                    <PropertyInfo
                        nextStep={this.nextStep}
                     />
                )
            case 2:
                return (
                    <AddressInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                     />
                )
            case 3:
                 return (
                     <DateInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                      />
                 )
            case 4:
                return (
                    <UserInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                     />
                )
            case 5:
                return <h1>Confirmation</h1>
        }
    }
}

export default StepForm