import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';

import LogIn from './Pages/LogIn';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                
              <Route path="/login" element={<LogIn/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
