import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';

import Index from './pages';
import DashboardResep from './pages/dashboardResep';

import Index from './pages/index';
import Room from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ReservationsPage from './pages/ReservationPage';

const rooms = [
  { id: 1, name: 'Standard Room', price: 100, image: `https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['Queen bed', 'Private bathroom', 'Wi-Fi'] },
  { id: 2, name: 'Deluxe Room', price: 150, image: `https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['King bed', 'Jacuzzi', 'Balcony'] },
  { id: 3, name: 'Suite', price: 200, image: `https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['Multiple rooms', 'Living area', 'Kitchenette'] },
  { id: 4, name: 'Executive Suite', price: 250, image: `https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['Spa bath', 'Sea view', 'Work desk'] },
  { id: 5, name: 'Single Room', price: 90, image: `https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['Single bed', 'Shared bathroom', 'TV'] },
  { id: 6, name: 'Double Room', price: 120, image: `https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['Double bed', 'Private bathroom', 'Mini fridge'] },
  { id: 7, name: 'Family Room', price: 180, image: `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['Multiple beds', 'Kitchen', 'Child-friendly'] },
  { id: 8, name: 'Penthouse Suite', price: 350, image: `https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
    amenities: ['Luxury amenities', 'Panoramic view', 'Spacious rooms'] },
  { id: 9, name: 'Ocean View Room', price: 220, image: `https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, 
  amenities: ['Sea view', 'Balcony', 'Double bed'] },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path='home' element={<Index/>}/>
        <Route path='dashboardResep' element={<DashboardResep/>}/>
        <Route path='rooms' element={<Room rooms={rooms}/>}/>
        <Route path="/rooms/:roomId" element = {<SingleRoom rooms={rooms} />}/>
        <Route path='reservations' element={<ReservationsPage rooms={rooms}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
