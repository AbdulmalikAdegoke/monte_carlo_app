import React from 'react'

import { FormInput } from '../../Common';


export default function ProjectMeta({ formData,setFormData }) {

  return (
    <>
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
    </>
  )
}
