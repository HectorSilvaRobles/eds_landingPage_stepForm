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
            res_or_com: null,
            intr_extr_both: null,
            fullname: '',
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


    // Handle Fields Change
    handleChange = (input) => {
        for(let i = 0; i < input.length; i++){
            this.setState({
                [input[i].type] : input[i].value
            })
        }
    }

    render(){
        const {step, intr_extr_both, res_or_com} = this.state
        const values = {step, intr_extr_both, res_or_com}
        console.log(this.state)
        switch(step){
            case 1:
                return (
                    <PropertyInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                     />
                )
            case 2:
                return (
                    <AddressInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
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