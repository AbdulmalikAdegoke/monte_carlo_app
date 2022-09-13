import React, {useState} from 'react'

import { Label,Input } from 'reactstrap'
import './../style.css'

export default function ProjectDescription() {
  const [descriptionValue,setDescriptionValue]= useState('');
  
  return (
    <div>
      <Label
        for='projectDescription'
        size='lg'
      >
        Project Description
      </Label>

      <Input
        id='projectDescription'
        type='textarea'
        bsSize='lg'
        name="projectDescription"
        value={descriptionValue}
        onChange={(e)=>{setDescriptionValue(e.target.value)}}
        placeholder='Project Description'
      />
        
    </div>
  )
}
