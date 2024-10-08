import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navn from "../src/PixaNav"
// import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App1 from "./Components/App1"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  {/* <App1/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navn/>} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

