import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';

// entry point
import LogIn from './Pages/LogIn';
import Registration from './Pages/Registration';
import ForgotPassword from './Pages/ForgotPassword';

import BaseLayout from './Components/Common/Layout/Layout';


function App() {

  // const [loggedIn, setLoggedIn] = useState(false)

  // const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState({
  //   email:"",
  //   phoneNumber:"",
  //   password:"",
  //   firstName:"",
  //   lastName:"",
  //   profileImageSrc:"",
  //   savedProjects:[{
  //     projectTitle:"",
  //     projectDescription:"",
  //     tasks:[{
  //       taskName:"",
  //       timeTo:0,
  //       estTp:0,
  //       monthTm:0,
  //       risk:[""]
  //     }]
  //   }]
  // })


  // // the function for toggling the list tasks as complete or incomplete
  // function toggleLogInState() {
  //   const logInState = !loggedIn
  //   setLoggedIn(logInState)

  //   const userLogInReset = {emailaddress:"",password:"",phoneNum:""}

  //   if(loggedIn === false) {
  //     setCurrentlyLoggedInUser(userLogInReset)
  //   }
  // }

  // function logUserIn(emailAddress,password) {
  //   // const emailAddress = emailAddressRef.current.value;
  //   // const passWord = passwordRef.current.value;
  //   console.log(emailAddress + ' ' + password)
  //   // const phoneNum = phoneNumberRef.current.value;

  //   const userLogInReset = {emailAddress:"",password:"",phoneNumber:""}
  //   setCurrentlyLoggedInUser({...currentlyLoggedInUser,email:emailAddress,password:password})
  //   const loginValidity = validateUser(currentlyLoggedInUser)
  //   console.log(loginValidity)

  //   if (loginValidity === true){
  //     console.log(userExists)
  //     const exists = !userExists
  //     console.log(exists)
  //     setCurrentlyLoggedInUser(loginValidity)
  //     // setUserExists(exists)
  //     toggleLogInState(exists)
  //   } else {
  //     setCurrentlyLoggedInUser(userLogInReset)
  //     return false
  //   }
  // }


  return (
    <div className="bodyContainer">
      <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<BaseLayout toggleLogInState={toggleLogInState} userProfile={currentlyLoggedInUser} />}>
                <Route path="*" element={<ErrorPage userProfile={currentlyLoggedInUser} />} />
                <Route path="profile" element={<Profile userProfile={currentlyLoggedInUser} />} />
                <Route path="history" element={<History userProfile={currentlyLoggedInUser} />} />
                <Route path="dashboard" element={<Dashboard userProfile={currentlyLoggedInUser} />} />
              </Route> */}


              <Route path="/forgottenPassword" element={<ForgotPassword/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/" element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
