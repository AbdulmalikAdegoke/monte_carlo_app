import React from 'react'

import { RegistrationForm } from '../Components/Authentication'
import { PageLink } from '../Components/Common'

import './../App.css'

export default function Registration() {
  return (
    <div className='registration_page'>
      <div className='registration_form_container'>
        <div className='registration_form'>
          <h1>
            MCS
          </h1>
          <h2>
            Register
          </h2>
          <p style={{textAlign:"left"}}>
            Register your user details here
          </p>

          <RegistrationForm />

          <br/>
                
          <p>
            Already have an account?: {' '}
            <PageLink
              pageHref='/'
              linkLabel='LogIn'
            />
          </p>
        </div>      
      </div>

      <div className='registrationpage_div'>
        <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock' style={{height:"600px",top:"50%",bottom: "50%",float:"right"}} />
      </div>

    </div>
  )
}
