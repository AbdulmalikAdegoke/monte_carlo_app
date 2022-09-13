import React from 'react'

import { Link } from 'react-router-dom'

import { ChangePasswordForm } from '../Components/Authentication'

import './../App.css'

export default function ChangePassword() {
  return (
    <div className='change_password_page'>
      <div className='changepasswordpage_div'>
        <h1>
          MCS
        </h1>

        <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock'  />
      </div>

      <div className='changepassword_form_container'>
        <div className='changepasswordform_div'>
          <h1>
            MCS
          </h1>

          <img className='stock_img' src={require('./../Assets/stock/template.png')} alt='Stock'  />
        </div>

        <h2>
          Change Password
        </h2>
        <p>
          Change your password here
        </p>

        <ChangePasswordForm />

        <p>
          <Link
            className='login_a'
            to='/'
          >
            LogIn
          </Link>
        </p>
      </div>
      
      
    </div>
    // <div>ChangePassword
        
    // </div>
  )
}
