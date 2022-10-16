import React from 'react'

import { Formik, Form } from 'formik';
import { forgottenPasswordFormValidation,FormInput,SubmitButton } from '../../Common';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function ForgottenPasswordForm() {
  
  
  return (
    <div className='forgottenPasswordForm'>
      <Formik
        initialValues={{emailAddress:"",password:""}}
        validationSchema={forgottenPasswordFormValidation}
      >
        <Form>
          <FormInput 
            inputLabel="Email Address"
            id="emailAddress"
            name="emailAddress"
            type='email'
            placeholder='Type your email address here'
          />

          <br/>

          <SubmitButton
            buttonLabel='Request Password Change'
          />

        </Form>
      </Formik>
    </div>
  )
}
