import React from 'react'

import { LogInForm } from '../Components/Authentication'
import { PageLink } from '../Components/Common'

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
        <div className='loginform_div'>
          <h1>
            MCS
          </h1>
        </div>

        <h2>
          LogIn
        </h2>
        <p>
          Enter your login details here
        </p>

        <LogInForm />

        <br />

        <p className='no_account_msg'>
          Don't have an account?: {' '}
          <PageLink
            pageHref='/registration'
            linkLabel='Register'
          />
        </p>


      </div>
      
      
    </div>
  )
}
