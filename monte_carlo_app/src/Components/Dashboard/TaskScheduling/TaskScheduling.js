import React, {useState,useRef} from 'react'

import { Input, Label, Button, Table, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { CustomModal } from '../../Common';

import ProjectTasks from './ProjectTasks/ProjectTasks';
import EditTask from './EditTask/EditTask';

import AddTaskModal from './AddTaskModal/AddTaskModal';

import 'antd/dist/antd.css';
import { Empty } from 'antd';

export default function TaskScheduling({ formData, setFormData, tasks, setTasks, risks, setRisks }) {
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

  function deleteTaskHandler(index) {
      console.log(index)
      const updatedTasks = [...formData.tasks]
      updatedTasks.splice(index, 1) // deleting the specified risk
      setFormData({...formData,tasks:updatedTasks})
  }
  const riskArr =[]
  
  function addRiskHandler() {//id, addedRisk
      setRisks([...risks,""])
  }

  function deleteRiskHandler(id) {
      const updatedRisks = [...risks]
      updatedRisks.splice(id, 1) // deleting the specified risk
      setRisks(updatedRisks) // updating the risks
  }

  function toggleEditTask(id) {
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[id]
      console.log(taskDataFromFormData.editing)
      taskDataFromFormData.editing = !taskDataFromFormData.editing
      console.log("New: ",taskDataFromFormData.editing)
      setFormData({...formData,tasks:newFormDataTasks})
  }

  function toggleSaveEdit(id,pTimeRef,mTimeRef,oTimeRef,tNameRef,tempRisk){
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[id]
      console.log(taskDataFromFormData.editing)

      taskDataFromFormData.taskName=tNameRef.current.value
      taskDataFromFormData.optTime=oTimeRef.current.value
      taskDataFromFormData.pesTime=pTimeRef.current.value
      taskDataFromFormData.maxTime=mTimeRef.current.value
      taskDataFromFormData.risk=tempRisk
      taskDataFromFormData.editing = !taskDataFromFormData.editing

      setFormData({...formData,tasks:newFormDataTasks})
  }

  function editHandlerAddTask(id) {
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[id]
      taskDataFromFormData.risk.push("")
      setFormData({...formData,tasks:newFormDataTasks})
  }

  function editHandlerDeleteRisk(taskId,id) {
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[taskId]
      console.log(taskId,taskDataFromFormData);
      taskDataFromFormData.risk.splice(id, 1) // deleting the specified risk
      setFormData({...formData,tasks:newFormDataTasks})
  }

  const inputFieldChangeHandler=(index, event) => {
      const riskValues = [...risks]
      riskValues[index] = event.target.value
      setRisks(riskValues)
      console.log(event.target.name,' ', index, ' ', risks)
  }

  const setEmptyRisk= ()=>{setRisks([""])}
  const addEmptyRisk= (taskId,id)=>{
      const newFormDataTasks = [...formData.tasks]
      newFormDataTasks[taskId].risk.push("")
      setFormData({...formData,tasks:newFormDataTasks})
  }

  return (
    <div className='formContent'>
      <Button 
        color='primary' 
        onClick={addTaskConfirmation} 
        style={{width:"15%"}}
      >
        Add a task
      </Button>

      <br />
        <br />
        {/* conditional rendering */}
        {formData.tasks.length === 0?
            // <p>Not Here</p>
            <Empty />
            :
            <Table
              bordered
              hover
              responsive
            >
              <thead>
                <tr>
                  <th>
                    Task Name
                  </th>
                  <th>
                    Time 
                    <br/>
                    to
                  </th>
                  <th>
                    Est. 
                    <br/>
                    tp
                  </th>
                  <th>
                    (Month) 
                    <br/>
                    tm
                  </th>
                  <th>
                    Risks
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* conditional rendering of the  */}
                {formData.tasks.map((task,id) => {
                    return <ProjectTasks key={id} index={id} tasks={task} toggleEditTask={toggleEditTask} 
                        addRiskHandler={addRiskHandler} deleteRiskHandler={deleteRiskHandler} 
                        inputFieldChangeHandler={inputFieldChangeHandler} toggleDeleteTask={deleteTaskHandler} 
                        toggleSaveEdit={toggleSaveEdit} editHandlerAddTask={editHandlerAddTask} 
                        editHandlerDeleteRisk={editHandlerDeleteRisk} setEmptyRisk={setEmptyRisk} 
                        addEmptyRisk={addEmptyRisk} 
                        // temporaryRisk={temporaryRisk} 
                        />
                    })}
                </tbody>
            </Table>
        }


      <AddTaskModal 
      formData={formData} setFormData={setFormData} risks={risks} setRisks={setRisks}/>

    </div>
  )
}
