import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {MdEmail, MdPerson, MdLocalPhone} from 'react-icons/md'
import './view3.css'

// Form phone input regex
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Form validation
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short').max(30, 'Too long').required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    phone: Yup.string().matches(phoneRegExp, 'Invalid Phone Number').required('Phone is required').max(15, 'Invalid Phone Number')
})

const View3 = (props) => {
    return (
            <div className='view1'>
                <div className='view-title'>
                    <h1>Contact Information</h1>
                    <h2>Best way can we stay in contact.</h2>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => console.log(values)}
                >
                    {({values, errors, touched}) => (
                        <Form className='view-content'>
                            <div className='view3-form'>
                                <div className={errors.name && touched.name ? 'form-input-error' : null}>
                                    <div className='form-title'>
                                        <h1>Name</h1>
                                        {errors.name && touched.name ? <h2>*{errors.name}</h2> : null}
                                    </div>
                                    <div className='form-input'>
                                        <div className='form-input-icon'><MdPerson /></div>
                                        <div className='form-input-field'>
                                            <Field 
                                                id='name' 
                                                name='name' 
                                                placeholder='Enter your name'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={errors.email && touched.email ? 'form-input-error' : null}>
                                    <div className='form-title'>
                                        <h1>Email</h1>
                                        {errors.email && touched.email ? <h2>*{errors.email}</h2> : null}
                                    </div>
                                    <div className='form-input'>
                                        <div className='form-input-icon'><MdEmail /></div>
                                        <div className='form-input-field'>
                                            <Field 
                                                id='email' 
                                                name='email' 
                                                placeholder='Enter your email'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={errors.phone && touched.phone ? 'form-input-error' : null}>
                                    <div className='form-title'>
                                        <h1>Phone</h1>
                                        {errors.phone && touched.phone ? <h2>*{errors.phone}</h2> : null}
                                    </div>
                                    <div className='form-input'>
                                        <div className='form-input-icon'><MdLocalPhone /></div>
                                        <div className='form-input-field'>
                                            <Field 
                                                id='phone' 
                                                name='phone' 
                                                placeholder='Enter your phone'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
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

export default View3