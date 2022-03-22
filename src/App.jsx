import React, { useEffect, useState } from 'react';
import { LogIn } from './componentes/Login';
import { SignUp } from './componentes/Signup';
import { ViewNotes } from './componentes/Viewnotes';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { stateAuthUser } from './firebase/auth';




function App() {
  //const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unSuscribe = stateAuthUser((user) => {
      if (user == null || user == undefined) {
      } else {
        setCurrentUser(user.email);
      }

    })
    return () => unSuscribe()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/login' element={<LogIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/viewnotes' element={<ViewNotes currentUser={currentUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
