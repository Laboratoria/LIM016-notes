import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import LogInPages from './pages/LogInPages';
import SingUpPages from './pages/SingUpPages';
import NotFoundPages from './pages/NotFoundPages';
import Navbar from './components/Navbar';


export default function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path="/" element={<LogInPages/>} />
        <Route path="/singup" element={<SingUpPages/>} />
        <Route path="/home" element={<HomePages/>} />
        <Route path="*" element={<NotFoundPages/>} />
      </Routes>
    </BrowserRouter>
  );  
}



