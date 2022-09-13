import React from 'react'

import { Link } from 'react-router-dom'

import { ForgottenPasswordForm } from '../Components/Authentication'

import './../App.css'

export default function ForgottenPassword() {
  return (
    <div className='forgotten_password_page'>
      <div className='forgotten_p_div'>
        <h1>
          MCS
        </h1>

        <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock'  />
      </div>

      <div className='forgottenp_form_container'>
        {/* <div className='forgottenp_div'>
          <h1>
            MCS
          </h1>

          <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock'  />
        </div> */}

        <h2>
          Forgotten Password
        </h2>
        <p>
          Request password change here
        </p>

        <ForgottenPasswordForm />

        <br />

        <p className='forgotten_p_login'>
          Want to login: {' '}
          <Link
            className='login_a'
            to='/'
          >
            Login
          </Link>
        </p>


      </div>
        
    </div>
  )
}
