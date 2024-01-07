import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';

import Index from './pages';
import DashboardResep from './pages/dashboardResep';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path='home' element={<Index/>}/>
        <Route path='dashboardResep' element={<DashboardResep/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
