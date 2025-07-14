import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'

function HomePage(){
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

function App() {
  return (
    <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </>
  )
}

export default App
