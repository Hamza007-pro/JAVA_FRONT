import React, { useState } from 'react';
import DatePicker from './datePicker';
import NumberPicker from './numberPicker';

interface ComponentProps {
  title: string;
  button: string;
}

const Reservation: React.FC<ComponentProps> = (props) => {

  const reservationItems = [
    { id: 1, name: 'Check In',component:<DatePicker/>},
    { id: 2, name: 'Check Out',component:<DatePicker/>},
    { id: 3, name: 'Room',component:<NumberPicker/>},
    { id: 4, name: 'Guests',component:<NumberPicker/>},
  ]

  return (
    <div className="rounded-lg shadow-md container mx-auto mt-16 p-8">
      <h3 className="text-2xl font-semibold text-center mb-4 underline">{props.title}</h3>
      {reservationItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between mt-6">
          <label className="text-lg font-medium text-gray-700">{item.name}</label>
          {item.component}
        </div>
      ))}
      <button
        className="block mx-auto mt-8 bg-white text-black border border-black hover:bg-black hover:text-white hover:border-transparent transition duration-300 px-6 py-3 rounded-lg text-lg font-medium"
      >
        {props.button}
      </button>
    </div>

  );
};

export default Reservation;
