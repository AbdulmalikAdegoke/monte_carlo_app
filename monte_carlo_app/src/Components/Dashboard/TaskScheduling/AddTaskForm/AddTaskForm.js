import React from 'react'

import { Label, Input, Button } from 'reactstrap'
import { FormInput } from '../../../Common'

export default function AddTaskForm({ tNameRef, oTimeRef, pTimeRef, mTimeRef, risks, setEmptyRisk, inputFieldChangeHandler, deleteRiskHandler, addRiskHandler }) {

  return (
    <div>
      <FormInput 
        inputLabel="Task Name"
        id="taskName"
        name="taskName"
        type='text'
        placeholder='Task name'
        innerRef={tNameRef}
      />

      <FormInput 
        inputLabel="Optimistic Time"
        id="optimisticTime"
        name="optimisticTime"
        type='number'
        placeholder='Optimistic Time'
        innerRef={oTimeRef}
        min={0}
      />
        
      <FormInput 
        inputLabel="Pessimistic Time"
        id="pessimisticTime"
        name="pessimisticTime"
        type='number'
        placeholder='Pessimistic Time'
        innerRef={pTimeRef}
        min={0}
      />
        
      <FormInput 
        inputLabel="Maximum Time"
        id="maximumTime"
        name="maximumTime"
        type='number'
        placeholder='Maximum Time'
        innerRef={mTimeRef}
        min={0}
      />

      <Label
        size="lg"  
        for="risks"
      >
        Risk(s)
      </Label>

      {/* {risks.length===0 &&
        <Button
          onClick={setEmptyRisk}
          color="primary"
           // ={risks.length===1}
        >
          Add Risk
        </Button>
      }

      {risks.map(
        (risk,index)=>{ 
          return <div key={index}
                    style={{
                      display:"flex",
                      flexFlow:"row nowrap",
                      marginBottom:"20px"
                      // justifyContent:"space-between"
                    }}
                  >
                    <Input 
                      id='risks'
                      bsSize="lg"
                      value={risk}
                      onChange={event => inputFieldChangeHandler(index, event)}
                      type="text"
                      placeholder='Risk' 
                    /> 
                      
                    <Button 
                      color="danger"
                      onClick={deleteRiskHandler}
                      style={{
                        width:"15%",
                        borderRadius:"50%",
                        marginLeft:"10px"
                      }}
                      // disabled={risks.length===1}
                    >
                      -
                    </Button>
                    <Button 
                      color="primary"
                      onClick={addRiskHandler}
                      style={{
                        width:"15%",
                        borderRadius:"50%",
                        marginLeft:"10px"
                      }}
                    >
                      +
                    </Button>
                  </div>
          }
        )
      } */}
    </div>
  )
}
