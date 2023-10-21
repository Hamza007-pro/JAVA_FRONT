import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';

import Index from './pages';
import DataBaseService from './components/services/DataBaseService/DataBaseService';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path='home' element={<Index/>}/>
        <Route path='DataBaseService' element={<DataBaseService/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
