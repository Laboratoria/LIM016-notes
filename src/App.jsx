import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import LogInPages from './pages/login/LogInPages';
import SingUpPages from './pages/SingUpPages';
import NotFoundPages from './pages/NotFoundPages';


export default function App() {
  return ( 
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<LogInPages/>} />
        <Route path="/singup" element={<SingUpPages/>} />
        <Route path="/home" element={<HomePages/>} />
        <Route path="*" element={<NotFoundPages/>} />
      </Routes>
    </BrowserRouter>
  );  
}



