import React from 'react'

import { Label, Input,Button } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function RegistrationForm() {
  
  
  return (
    <div className='registrationForm'>
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
        for='phoneNumber'
        size='lg'
      >
        Phone Number
      </Label>
      <Input 
        id='phoneNumber'
        type='tel'
        bsSize='lg'
        placeholder='Type your phone number here'
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

      <Button
        color='primary'
        size='lg'
        type='submit'
      >
        Register
      </Button>
        
    </div>
  )
}
