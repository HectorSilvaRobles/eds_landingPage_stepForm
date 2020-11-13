import React, {Component} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './view2.css'


const validationSchema = Yup.object().shape({
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required')
})

export default class View2 extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div className='view1'>
                <div className='view-title'>
                    <h1>Property Location</h1>
                    <h2>Where will the estimate done.</h2>
                </div>
                <Formik
                    initialValues={{
                        address: '',
                        city: '',
                        state: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => console.log(values)}
                >
                    {({values, errors, touched}) => (
                        <Form className='view-content'>
                            <div className='view2-form'></div>
                            <div className='view1-content-button'>
                                <button
                                    // disabled={serviceState.length === 0 || resOrCom === null ? true : false}
                                    // className={serviceState.length === 0 || resOrCom === null ? null : 'modal-button-active'}
                                    // onClick={() => {
                                    //     props.handleUpdate('selected', {'resOrCom': resOrCom, 'services' : serviceState})
                                    //     props.handleView('view2')
                                    // }}
                                >Continue</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}