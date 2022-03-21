import React, {useEffect, useState} from 'react';
import { LogIn } from './componentes/Login';
import { SignUp } from './componentes/Signup';
import { ViewNotes } from './componentes/Viewnotes';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {stateAuthUser} from './firebase/auth';




function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(()=>{
    const unSuscribe = stateAuthUser((user)=> {
      console.log('user de APP', user.email);
      if (user == null|| user == undefined) {
        console.log('hollllaaaa')
        return <Navigate to = '/login'/>
      }else{
        setCurrentUser(user.email);
        alert('Usuario Logeado');

      } 
      
    }) 
    return() => unSuscribe()
  },[])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/login' element={<LogIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/viewnotes' element={<ViewNotes currentUser = {currentUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
