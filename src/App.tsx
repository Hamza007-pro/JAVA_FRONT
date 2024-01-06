import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';

import Index from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path='home' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
