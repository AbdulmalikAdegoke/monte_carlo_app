import React from 'react'
import { Button } from 'reactstrap'

import { useField } from 'formik'
import { Formik, Form } from 'formik';
import { registrationFormValidation,FormInput,SubmitButton } from '../../Common';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function RegistrationForm() {
  // const [field,meta] = useField(formProps)
  
  return (
    <div className='registrationForm'>
      <Formik
        initialValues={{emailAddress:"",phoneNumber:"",password:""}}
        validationSchema={registrationFormValidation}
      >
        <Form>
          <FormInput 
            inputLabel="Email Address"
            id="emailAddress"
            name="emailAddress"
            type='email'
            placeholder='Type your email address here'
          />

          <FormInput 
            inputLabel="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            type='tel'
            placeholder='Type your phone number here'
          />

          <FormInput 
            inputLabel="Password"
            id="password"
            name="password"
            type='password'
            placeholder='Type your password here'
          />

          <br />

          <SubmitButton
            buttonLabel='Register'
          />

        </Form>
      </Formik>        
    </div>
  )
}
