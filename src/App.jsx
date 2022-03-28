import React, { useEffect, useState } from 'react';
import { LogIn } from './componentes/Login';
import { SignUp } from './componentes/Signup';
import { ViewNotes } from './componentes/Viewnotes';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { stateAuthUser } from './firebase/auth';




function App() {
  //const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    try{
      stateAuthUser((user) => {
        const usuario = user.email;
        if (usuario == null || usuario == undefined) {
          setCurrentUser(null)
        } else {
          setCurrentUser(usuario);
        }
  
      })
    }
    catch(error){}
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/login' element={<LogIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/viewnotes' element={
            currentUser?
            <ViewNotes currentUser={currentUser} />
            :<LogIn/>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
