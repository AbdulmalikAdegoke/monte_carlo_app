import React from 'react'

import { Formik, Form } from 'formik';

import { projectFormValidation,FormInput,SubmitButton } from '../../Common';


export default function ProjectMeta({ formData,setFormData }) {

  return (
    <Formik
        initialValues={{projectTitle:"",projectDescription:""}}
        validationSchema={projectFormValidation}
    >
      {
        formProps => (
          <Form>
            <FormInput 
              inputLabel="Project Title"
              id='projectTitle'
              name="projectTitle"
              type='text'
              placeholder='Project Title'
              value={formData.projectTitle}
              onChange={(e)=>
                setFormData({...formData,projectTitle:e.target.value})
              }
            />

            <FormInput 
              inputLabel="Project Description"
              id='projectDescription'
              name="projectDescription"
              type='textarea'
              placeholder='Project Description'
              value={formData.projectDescription}
              onChange={(e)=>
                setFormData({...formData,projectDescription:e.target.value})
              }
            />
              {/* <ProjectTitle 
                formData={formData}
                setFormData={setFormData}
              />
              <ProjectDescription 
                formData={formData}
                setFormData={setFormData}
              /> */}

          
        </Form>

        )
      }
        
    </Formik>
  )
}
