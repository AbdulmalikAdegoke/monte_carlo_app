import React, {useState} from 'react'

import { Label,Input } from 'reactstrap'
import './../style.css'

export default function ProjectTitle() {
  const [titleValue,setTitleValue]= useState('');
  return (
    <div>
      <Label
        for='projectTitle'
        size='lg'
      >
        Project Title
      </Label>

      <Input
        id='projectTitle'
        type='text'
        bsSize='lg'
        name="projectTitle"
        value={titleValue}
        onChange={(e)=>{setTitleValue(e.target.value)}}
        placeholder='Project Title'
      />
        
    </div>
  )
}
