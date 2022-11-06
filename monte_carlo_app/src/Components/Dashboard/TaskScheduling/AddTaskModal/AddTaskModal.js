import React, { useState, useRef } from 'react'

import { CustomModal, FormInput } from '../../../Common'
import AddTaskForm from '../AddTaskForm/AddTaskForm'

import { Input, Label, Button } from 'reactstrap'

export default function AddTaskModal({ formData, setFormData, risks, setRisks, addTask, addTaskConfirmation, setAddTask,setEmptyRisk, inputFieldChangeHandler, deleteRiskHandler, addRiskHandler}) {
  const tNameRef= useRef()
  const oTimeRef= useRef()
  const pTimeRef= useRef()
  const mTimeRef= useRef()

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

  return (
    <div>
      
      <CustomModal
        openState={addTask}
        headerTitle='Add Task'
        modalBodyContent={<AddTaskForm tNameRef={tNameRef} oTimeRef={oTimeRef} pTimeRef={pTimeRef} mTimeRef={mTimeRef} setEmptyRisk={setEmptyRisk} inputFieldChangeHandler={inputFieldChangeHandler} deleteRiskHandler={deleteRiskHandler} addRiskHandler={addRiskHandler} />}
        confirmationAction={addTaskHandler}
        confirmationMsgBtnColour="primary"
        actionMessage='Add Task'
        closeModal={addTaskConfirmation}
      />
    </div>
  )
}