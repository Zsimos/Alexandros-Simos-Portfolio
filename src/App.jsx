import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Projects, Contact} from './pages';
const App = () => {
  return (
    <main className = "bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path= "/about" element= {<About/>}/> 
          <Route path= "/projects" element= {<Projects/>}/> 
          <Route path= "/contact" element= {<Contact/>}/> 
         </Routes>
      </Router>
      
      <h1 className= "text-3xl font-bold underline text-red-500">
    Alexandros Simos Portfolio
   </h1>
      
</main>
  )
}

export default App
