import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/App.css"
import GoaApp from "./Pages/GoaMain"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menupage";  
import Main from './App';    
import Detail from './Pages/Detailsec';  
import Goadetail from "./Pages/GoaDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Main/>} />   
        <Route path="/menu" element={<Menu />} />
        <Route path="/detail" element={<Detail />} /> 
        <Route path="/goamain" element={<GoaApp/>}/>
        <Route path="/goadetails" element={<Goadetail/>}/>
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
