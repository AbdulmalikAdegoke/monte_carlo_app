import React from 'react'

import { Formik, Form } from 'formik';
import { changePasswordFormValidation,FormInput,SubmitButton } from '../../Common';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function ChangePasswordForm() {
  
  
    return (
        <div className='changePasswordForm'>
            <Formik
                initialValues={{newPassword:"",retypedPassword:""}}
                validationSchema={changePasswordFormValidation}
            >
                <Form>
                    <FormInput 
                        inputLabel="New Password"
                        id="newPassword"
                        name="newPassword"
                        type='password'
                        placeholder='Type your new password here'
                    />

                    <FormInput 
                        inputLabel="Confirm New Password"
                        id="retypedPassword"
                        name="retypedPassword"
                        type='password'
                        placeholder='Confirm Your Password'
                    />

                    <br/>

                    <SubmitButton
                        buttonLabel='Change Password'
                    />
                </Form>
            </Formik>            
        </div>
    )
}
