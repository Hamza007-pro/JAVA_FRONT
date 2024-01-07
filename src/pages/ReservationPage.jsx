import React from 'react';
import Reservation from '../common/Reservation';
import AvailableRooms from '../components/AvailableRooms';
import Nav from '../common/nav';

const ReservationsPage = ({rooms}) => {
  return (
    <div className="flex justify-between">
        <Nav />
      <div className="w-1/4 p-8 mt-32">
        <Reservation title='Check Availability' button='Search ' />
      </div>
      <div className="w-2/3 mr-32 mt-32 p-8">
        <AvailableRooms rooms={rooms} />
      </div>
    </div>
  );
};

export default ReservationsPage;
