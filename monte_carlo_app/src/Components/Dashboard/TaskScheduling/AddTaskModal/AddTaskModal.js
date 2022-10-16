import React, { useState, useRef } from 'react'

import { CustomModal, FormInput } from '../../../Common'

import { Input, Label, Button } from 'reactstrap'

export default function AddTaskModal({ formData, setFormData, risks, setRisks}) {
  const [addTask,setAddTask] = useState(false)

  const tNameRef= useRef()
  const oTimeRef= useRef()
  const pTimeRef= useRef()
  const mTimeRef= useRef()

  function addTaskConfirmation() {
    const add = !addTask
    setAddTask(add)
  }

  // function for handling the adding of the tasks to the current form data
  // this updates the current form data state- specifically the task attribute
  function addTaskHandler() {
    setFormData({...formData,
      tasks:[
        ...formData.tasks,
        {
          taskName:tNameRef.current.value,
          optTime:oTimeRef.current.value,
          pesTime:pTimeRef.current.value,
          maxTime:mTimeRef.current.value,
          editing:false,
          risk:risks
        }
      ]
    })
  
    console.log(formData)
    addTaskConfirmation()
    setRisks([""])
  }

  const AddTaskForm = () => {
    return (
      <>
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
        
      </>
                
    );

  }

  return (
    <div>
      
      <CustomModal
        openState={addTask}
        headerTitle='Add Task'
        modalBodyContent={AddTaskForm}
        confirmationAction={addTaskHandler}
        confirmationMsgBtnColour="primary"
        actionMessage='Add Task'
        closeModal={addTaskConfirmation}
      />
    </div>
  )
}

// <Label 
//           size="lg"
//           for="risks"
//         >
//           Risk(s)
//         </Label>

//         {risks.length===0 &&
//           <Button
//             onClick={setEmptyRisk}
//             color="primary"
//             // ={risks.length===1}
//           >
//             Add Risk
//           </Button>
//         }

//         {risks.map(
//           (risk,index)=>{ 
//             return  <div key={index}
//                       style={{
//                         display:"flex",
//                         flexFlow:"row nowrap",
//                         marginBottom:"20px"
//                         // justifyContent:"space-between"
//                       }}
//                     >
//                       <Input 
//                         id='risks'
//                         bsSize="lg"
//                         value={risk}
//                         onChange={event => inputFieldChangeHandler(index, event)}
//                         type="text"
//                         placeholder='Risk' 
//                       /> 
                      
//                       <Button 
//                         color="danger"
//                         onClick={deleteRiskHandler}
//                         style={{
//                           width:"15%",
//                           borderRadius:"50%",
//                           marginLeft:"10px"
//                         }}
//                         // disabled={risks.length===1}
//                       >
//                         -
//                       </Button>
//                       <Button 
//                         color="primary"
//                         onClick={addRiskHandler}
//                         style={{
//                           width:"15%",
//                           borderRadius:"50%",
//                           marginLeft:"10px"
//                         }}
//                       >
//                         +
//                       </Button>
//                     </div>
//                   }
//         )}