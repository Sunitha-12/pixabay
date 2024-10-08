
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Final from "./Components/Final";
import './App.css'
import Register from "./Pages/Register";
import Login from "./Pages/Login";
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Final/>}></Route>
      <Route path="/reg" element={<Register/>}></Route>
      <Route path="/log" element={<Login/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}