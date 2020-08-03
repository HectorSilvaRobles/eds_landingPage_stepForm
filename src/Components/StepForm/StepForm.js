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
            address: '',
            city: '',
            state: '',
            zipcode: '',
            fullname: '',
            email: '',
            phone: '',
            estimateTime : {
                date_of_estimate: '',
                time_of_estimate: ''
            }
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

    // Set step, when you want a specific step
    setStep = (stepNum) => {
        this.setState({
            step: stepNum
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
        const {step, intr_extr_both, res_or_com, address, city, zipcode, state, estimateTime} = this.state
        const values = {step, intr_extr_both, res_or_com, address, city, zipcode, state, estimateTime}

        console.log(this.state)
        switch(step){
            case 1:
                return (
                    <PropertyInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        setStep={this.setStep}
                     />
                )
            case 2:
                return (
                    <AddressInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        setStep={this.setStep}
                        handleChange={this.handleChange}
                     />
                )
            case 3:
                 return (
                     <DateInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        setStep={this.setStep}
                      />
                 )
            case 4:
                return (
                    <UserInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        setStep={this.setStep}
                        handleChange={this.handleChange}
                     />
                )
            case 5:
                return <h1>Confirmation</h1>
        }
    }
}

export default StepForm