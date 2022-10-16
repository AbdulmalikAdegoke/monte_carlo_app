import React from 'react'

import { Formik } from 'formik';
import { FormInput,profileFormValidation } from '../Components/Common';
import { Button, Input, Form, FormGroup, Label, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports

export default function Profile() {
  return (
    <div className='outlet_Container profile'>
      <h2>Edit Profile</h2>

      <div className='profile_image'>
            {/* <img src={require('./profile.png')} alt='Profile stock' style={{width:"150px"}} /> */}
        </div>
        <br />

        <div>
        <Formik
          initialValues={{emailAddress: '', firstName: '', lastName: '', phoneNumber: ''}}
          validationSchema={profileFormValidation}  
        >
          {formik=>
            (
            <Form>
              <Row>
                <Col md={6}>
                  <FormInput
                    inputLabel=""
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    // onChange={updateProfile}
                  />
                </Col>
                <Col md={6}>
                  <FormInput
                    inputLabel=""
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    // onChange={updateProfile}
                    // ref={emailAddressRef} 
                  />
                </Col>
              </Row>
              <FormInput
                inputLabel=""
                id="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
                type="email" 
                // onChange={updateProfile}
                // ref={emailAddressRef} 
              />
              <FormInput
                inputLabel=""
                id="telephoneNumber"
                name="telephoneNumber"
                placeholder="Telephone Number"
                type="tel"
                // onChange={updateProfile}
                // ref={emailAddressRef} 
              />
            </Form>
          )}
                    
          </Formik>
            
        </div>

        <br />
        <br />
        

        <div className='footer'>
            <Button 
              color='primary' 
              size='lg' 
              className='edit_profile_button' 
              // onClick={updateProfile}
              // disabled ={profileUpdated}
            >
                Update
            </Button>
            {' '}
            <Button 
              color='danger' 
              outline 
              size='lg' 
              className='edit_profile_button' 
              // onClick={updateProfile}
            >
                Cancel
            </Button>

        </div>

    </div>
  )
}
