import React from 'react'

import { Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function LogInForm() {


  return (
    <div className='loginForm'>
        <Label
            for='emailAddress'
            size='lg'
        >
            Email Address
        </Label>
        <Input 
            id='emailAddress'
            type='email'
            bsSize='lg'
            placeholder='Type your email address here'
        />

        <br/>

        <Label
            for='password'
            size='lg'
        >
            Password
        </Label>
        <Input 
            id='password'
            type='password'
            bsSize='lg'
            placeholder='Type your password here'
        />

        <br />

        <div style={{marginBottom:"40px"}}>
            <div className='remember_me'>
                <Input 
                    id='rememberme' 
                    type="checkbox" 
                    defaultValue={false} 
                    name='rememberme' 
                /> 
                <Label 
                    id='rm_label' 
                    for="rememberme"
                >
                    Remember Me
                </Label>
            </div>

            <div className='forgot_password'>
                <Link 
                    to='/forgottenPassword'
                >
                    Forgot Password?
                </Link>
            </div>
        </div>

        <br />

        <Button
            size='lg'
            type='submit'
            color='primary'
        >
            Log In
        </Button>
    </div>
  )
}
