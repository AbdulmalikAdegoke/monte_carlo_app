import React from 'react'

import { Link } from 'react-router-dom'

import { RegistrationForm } from '../Components/Authentication'

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
            Already have an account? {' '}
            <Link 
              className='login_a' 
              to='/'
            >
              LogIn
            </Link>
          </p>
        </div>      
      </div>

      {/* <div className='registrationpage_div'>
        <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock' style={{height:"600px",top:"50%",bottom: "50%",float:"right"}} />
      </div> */}

    </div>
  )
}
