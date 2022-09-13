import React from 'react'

import { Label, Input, Button } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function ForgottenPasswordForm() {
  
  
  return (
    <div className='forgottenPasswordForm'>
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

      <Button
        color='primary'
        size='lg'
        type='submit'
      >
        Request Password Change
      </Button>
        
    </div>
  )
}
