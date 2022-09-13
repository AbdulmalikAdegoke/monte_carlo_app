import React from 'react'

import { Link } from 'react-router-dom'

import { LogInForm } from '../Components/Authentication'

import './../App.css'

export default function LogIn() {
  return (
    <div className='log_in_page'>
      <div className='loginpage_div'>
        <h1>
          MCS
        </h1>

        <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock'  />
      </div>

      <div className='login_form_container'>
        {/* <div className='loginform_div'>
          <h1>
            MCS
          </h1>

          <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock'  />
        </div> */}

        <h2>
          LogIn
        </h2>
        <p>
          Enter your login details here
        </p>

        <LogInForm />

        <br />

        <p className='no_account_msg'>
          Don't have an account? {' '}
          <Link
            className='register_a'
            to='/registration'
          >
            Register
          </Link>
        </p>


      </div>
      
      
    </div>
  )
}
