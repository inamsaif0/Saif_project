import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import SeoInsighterX from './SeoInsighterX';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { auth } from './firebase';
import AdminPanel from './AdminPanel';
function App() {
  const[userName, setUserName]=useState("");
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }else setUserName("");
  
  })
},[])
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path='/login' element={<Login />}> </Route>
      <Route path='/signup' element={<Signup />}> </Route>
      <Route path='/' element={<SeoInsighterX />}> </Route>
      <Route path='/admin-panel' element={<AdminPanel name={userName}/>}> </Route>
      
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   {/* <Footer /> */}
    // </div>
  );
}

export default App;
