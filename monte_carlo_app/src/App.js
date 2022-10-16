import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"

import './App.css';

// entry point
import { LogIn, Registration, ForgottenPassword, ChangePassword, Dashboard, History, Profile, Error } from './Pages';

import { BaseLayout } from './Components/Common';

export default function App() {
  const [wantsToLogOut,setWantsToLogOut] = useState(false);

  function logOutConfirmation() {
    const logOut = !wantsToLogOut
    setWantsToLogOut(logOut)
  }

  
  
  return (
    // userProfile={currentlyLoggedInUser}
    // toggleLogInState={toggleLogInState} 
    <div className="bodyContainer">
        <BrowserRouter>
            <Routes>
              <Route path="/changePassword" element={<ChangePassword/>} />
              <Route path="/forgottenPassword" element={<ForgottenPassword/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/" element={<LogIn />} />
              
              {/* <Route path="/" element={<BaseLayout logOutConfirmation={logOutConfirmation} wantsToLogOut={wantsToLogOut} setWantsToLogOut={setWantsToLogOut} />}>
                <Route path="*" element={<Error />} />
                <Route path="profile" element={<Profile />} />
                <Route path="history" element={<History />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route> */}

              
            </Routes>
        </BrowserRouter>
    </div>
  )
}
