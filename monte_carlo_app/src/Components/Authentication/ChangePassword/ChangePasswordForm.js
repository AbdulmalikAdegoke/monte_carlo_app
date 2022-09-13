import React from 'react'

import { Label, Input } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function ChangePasswordForm() {
  
  
    return (
        <div className='changePasswordForm'>
            <Label
                for='newPassword'
                size='lg'
            >
                New Password
            </Label>
            <Input 
                id='newPassword'
                type='password'
                bsSize='lg'
                placeholder='Type your new password here'
            />

            <br/>

            <Label
                for='retypedPassword'
                size='lg'
            >
                Re-Type New Password
            </Label>
            <Input 
                id='retypedPassword'
                type='password'
                bsSize='lg'
                placeholder='Re-Type your new password here'
            />

            <br/>

            <button
                type='submit'
            >
                Change Password
            </button>
        </div>
    )
}
