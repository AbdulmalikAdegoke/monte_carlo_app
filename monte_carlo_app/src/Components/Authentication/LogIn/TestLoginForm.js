import React from 'react'

import { Button, Input, Label, Form } from 'reactstrap';

// import { Formik, Form } from 'formik';
import { loginFormValidation,FormInput,TestFormInput,FormCheckbox,TestFormCheckbox,PageLink,SubmitButton } from '../../Common';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function TestLogInForm({formProps}) {


  return (
    <div className='loginForm'>
        <Form>
            {/* <Input  /> */}
            <Label
                size="lg"
                // for={formProps.id}
            >
                
            </Label>
            <Input  
                id="emailAddress"
                name="emailAddress"
                type='email'
                placeholder='Type your email address here'
            />
            <TestFormInput 
                inputLabel="Email Address"
                id="emailAddress"
                name="emailAddress"
                type='email'
                placeholder='Type your email address here'
            />

            <TestFormInput 
                inputLabel="Password"
                id="password"
                name="password"
                type='password'
                placeholder='Type your password here'
            />

            <br />

            <div style={{marginBottom:"40px"}}>
                <div className='remember_me'>
                    <TestFormCheckbox
                        checkboxLabel='Remember Me'
                        id='rememberme' 
                        type="checkbox" 
                        defaultValue={false} 
                        name='rememberme' 
                    />
                </div>

                <div className='forgot_password'>
                    <PageLink
                        pageHref='/forgottenPassword'
                        linkLabel='Forgot Password?'
                    />
                </div>
            </div>

            <br/>

            {/* <SubmitButton
                buttonLabel='Log In'
            /> */}

            <Button
                color='primary'
                size='lg'
                type='submit'
            >
                Log In
            </Button>
        </Form>
        
        {/* <Formik
            initialValues={{emailAddress:"",password:""}}
            validationSchema={loginFormValidation}
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
                    inputLabel="Password"
                    id="password"
                    name="password"
                    type='password'
                    placeholder='Type your password here'
                />

                <br />

                <div style={{marginBottom:"40px"}}>
                    <div className='remember_me'>
                        <FormCheckbox
                            checkboxLabel='Remember Me'
                            id='rememberme' 
                            type="checkbox" 
                            defaultValue={false} 
                            name='rememberme' 
                        />
                    </div>

                    <div className='forgot_password'>
                        <PageLink
                            pageHref='/forgottenPassword'
                            linkLabel='Forgot Password?'
                        />
                    </div>
                </div>

                <br/>

                

                <Button
                    color='primary'
                    size='lg'
                    type='submit'
                >
                    Log In
                </Button>
            </Form>
        </Formik> */}
    </div>
  )
}
