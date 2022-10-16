import React, {useState,useRef} from 'react'
import TaskRisks from '../TaskRisks/TaskRisks';

import { Label, Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormInput,SubmitButton, ConfirmationModal } from '../../../Common';


export default function ProjectTasks({ index, tasks, toggleEditTask, 
                                        toggleDeleteTask, toggleSaveEdit, editHandlerAddTask, 
                                        editHandlerDeleteRisk, addEmptyRisk }) {
    const [wantsToDelete,setwantsToDelete] = useState(false);
    const [tempRisks,setTempRisks]=useState([])

    const tNameRef= useRef()
    const oTimeRef= useRef()
    const pTimeRef= useRef()
    const mTimeRef= useRef()

    const projectRisks = tasks.risk

    function editTask() {
        toggleEditTask(index)
        console.log([...tasks.risk]);
    }

    function saveEdit() {
        // setTempRisks(temp)
        
        toggleSaveEdit(index,pTimeRef,mTimeRef,oTimeRef,tNameRef,tempRisks)
    }

    function deleteTask() {
        toggleDeleteTask(index)
        setwantsToDelete(false)
    }

    function deleteConfirmation() {
        const del = !wantsToDelete
        setwantsToDelete(del)
    }

    const inputFieldChangeHandler=(index, event) => {
        const riskValues = [...tasks.risk]
        
        riskValues[index] = event.target.value
        setTempRisks(riskValues)
        
        console.log(event.target.value,' ', index, ' ', riskValues[index])
    }

    // 
    function addRiskHandler() {//id, addedRisk
        editHandlerAddTask(index)
    }
    function deleteRiskHandler(id) {
        editHandlerDeleteRisk(index,id) // deleting the specified risk
        // tasks.risk.splice(id, 1) 
    }

    function addNewRisk(id) {
        addEmptyRisk(index,id)
    }


  return (
    <tr>
        <td>
            {tasks.taskName}
        </td>

        <td>
            {tasks.optTime}
        </td>

        <td>
            {tasks.pesTime}
        </td>

        <td>
            {tasks.maxTime}
        </td>

        <td>
            {/* conditional rendering of the  */}
            {projectRisks.map((risks,id) => {
                return <TaskRisks key={id} risk={risks} />
            })}
        </td>

        <td style={{textAlign:"center"}}>
            <span className='projectActions' onClick={editTask} 
            style={{width:'45%',float:'left',color:'#0500FF',textAlign:"right"}}
            >
                Edit
            </span>
            {' '}
            <span className='projectActions' onClick={deleteConfirmation} 
            style={{width:'45%',float:'right',color:'#0500FF',textAlign:"left"}}
            >
                Delete
            </span>
        </td>

         {/* modal for the editing of the list's tasks upon toggle */}
         <Modal
            centered
            scrollable
            isOpen={tasks.editing}
          >
            {console.log(tasks.risk)}
            <ModalHeader>
              Edit To Do List Item
            </ModalHeader>
            <ModalBody>
                <FormInput 
                    inputLabel="Task Name"
                    id="taskName"
                    name="taskName"
                    type="text" 
                    placeholder='Task name'
                    defaultValue={tasks.taskName}
                    innerRef={tNameRef}
                />

                <FormInput 
                    inputLabel="Optimistic Time"
                    id="optimisticTime"
                    name="optimisticTime"
                    type="number" 
                    min={0}
                    placeholder='Optimistic Time' 
                    defaultValue={tasks.optTime}
                    innerRef={oTimeRef} 
                />

                <FormInput 
                    inputLabel="Pessimistic Time"
                    id='pessimisticTime'
                    name="pessimisticTime"
                    type="number" 
                    min={0}
                    placeholder='Pessimistic Time'
                    defaultValue={tasks.pesTime}
                    innerRef={pTimeRef}
                />

                <FormInput 
                    inputLabel="Maximum Time"
                    id='maximumTime'
                    name="maximumTime"
                    type="number" 
                    min={0}
                    placeholder='Maximum Time'
                    defaultValue={tasks.maxTime}
                    innerRef={mTimeRef} 
                />
                
                <Label 
                    size="lg"
                    for="risks"
                >
                    Risk(s)
                </Label>

                {tasks.risk.length===0 &&
                    <Button
                        onClick={addNewRisk}
                        color="primary"
                    >
                        Add Risk
                    </Button>
                }

                <InputGroup>
                {/* conditional rendering of the  */}
                {tasks.risk.map(
                    (risk,id)=>{ 
                        console.log(risk);
                        return <div key={id}
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
                            // value={risk}
                            defaultValue={risk}
                            onChange={event => inputFieldChangeHandler(id, event)}
                            type="text"
                            
                            placeholder='Risk' /> 
                            <Button 
                                color="danger"
                                onClick={()=>{deleteRiskHandler(id)}}
                                style={{
                                    width:"15%",
                                    borderRadius:"50%",
                                    marginLeft:"10px"
                                }}
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
                )}
                
                </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={saveEdit}
              >
                Save Edit
              </Button>
              {' '}
              <Button 
                color="danger" 
                onClick={editTask}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          {/* modal for the confirmation of the deletion of the list contents */}
          <ConfirmationModal
                openState={wantsToDelete}
                headerTitle='Task Deletion Confirmation'
                confirmationAction={deleteTask}
                confirmationMsgBtnColour="danger"
                actionMessage='Delete Task'
                closeModal={deleteConfirmation}
            />
    </tr>   
  )
}
