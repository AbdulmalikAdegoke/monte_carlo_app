import React, {useState} from 'react'

import { Button } from 'reactstrap';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { Formik } from 'formik';

import { dashboardFormsValidation } from '../Components/Common';
import { ConfirmationModal } from '../Components/Common';

import ProjectMeta from '../Components/Dashboard/ProjectMeta/ProjectMeta';
import TaskScheduling from '../Components/Dashboard/TaskScheduling/TaskScheduling';
import Output from '../Components/Dashboard/Output/Output';

import './../App.css'
import "formik-stepper/dist/style.css";

const  steps = ['Project Description','Task Scheduling','Output']

export default function Dashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formReset,setFormReset] = useState(false)
  const [tasks,setTasks] = useState([]);
  const [formData,setFormData] = useState({
    projectTitle:"",
    projectDescription:"",
    tasks:[] 
  });
  const [risks,setRisks] = useState([])

  const currentForm = (page) => {
    if (page === 0) {
      return <ProjectMeta formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <TaskScheduling formData={formData} setFormData={setFormData} tasks={tasks} setTasks={setTasks} risks={risks} setRisks={setRisks} />
    } else {
      return <Output formData={formData} />
    }
  }

  function resetFormConfirmation() {
    const wantsToResetForm = !formReset
    setFormReset(wantsToResetForm)
  }

  function resetForm() {
    const newFormData = {
      projectTitle:"",
      projectDescription:"",
      tasks:[]
    }
    setActiveStep(0)
    setFormData(newFormData)
    setFormReset(false)
  }
  
  return (
    <div className='outlet_Container dashboard'>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <br />

      {activeStep === steps.length ? (
        <>
          
          <div className='footer'>
            <Button onClick={resetForm}>
              Reset
            </Button>
          </div>
        </>
      ) : (
        <Formik
          initialValues={{
            projectTitle:"",
            projectDescription:"",
            taskName:"",
            minTime:0,
            pessTime:0,
            maxTime:0,
            risks:[""]
          }}
          validationSchema={dashboardFormsValidation}
        >
          {/* the multi level forms */}
          {currentForm(activeStep)}  
          
          <div className='footer'>
            <Button
              color={activeStep===0?'primary':activeStep===1?'secondary':activeStep===2?"secondary" :"danger"} 
              size='lg'  
              outline={activeStep===1?true:false}
              // {activeStep===1?onClick={}:onClick={}}
              // onClick={activeStep===1?{generateOutput}: {setactiveStep((currPg) => currPg+1)}}
              onClick={activeStep===0?()=>{setActiveStep(activeStep+1)}:activeStep===1 || activeStep===2?()=>{setActiveStep(activeStep-1)}:resetFormConfirmation}
              style={{width:"20%"}}
              disabled={activeStep===0? (formData.projectTitle==="" || formData.projectDescription===""?true:false) :activeStep===1? false:false}
            >
              {activeStep===0?"Next":activeStep===1 || activeStep===2? "Previous": "Cancel"}
            </Button>
            {' '}
            {activeStep>0 &&
              <Button
                color="primary"
                size='lg' 
                className='login_button' 
                onClick={activeStep===1?()=>{setActiveStep(activeStep+1)}:activeStep===2?()=>{setActiveStep(activeStep+1)}:resetFormConfirmation}
                style={{width:"20%",marginLeft:"5px"}}
                // onClick={previousStep}
                disabled={activeStep===1? (formData.tasks.length===0?true:false):false}
              >
                {activeStep===1?"Next":activeStep===2? "Submit":"Save"}
              </Button>
            }
          </div>
        </Formik>
      )}

      

      {/* modal for the confirmation of the deletion of the list contents */}
      <ConfirmationModal
        openState={formReset}
        headerTitle='Are you sure you want to cancel your made progress?'
        confirmationAction={resetForm}
        confirmationMsgBtnColour="danger"
        actionMessage='Reset Form'
        closeModal={resetFormConfirmation}
      />
    </div>
  )
}
