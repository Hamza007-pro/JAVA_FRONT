import React from 'react';
import { useParams } from 'react-router-dom';
import { amenityIcons } from '../common/AmenityDescriptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reservation from '../common/Reservation';

export interface Room {
  id: number;
  name: string;
  price: number;
  image: string;
  amenities: string[];
}

interface RoomDetailProps {
  rooms: Room[];
}


const RoomDetail: React.FC<RoomDetailProps> = ({ rooms }) => {
  const { roomId } = useParams<{ roomId?: string }>(); // Get the roomId from the URL parameter

  if (!roomId) {
    return <div className="text-center">Invalid room ID!</div>;
  }

  // Find the room data based on the roomId
  const room: Room | undefined = rooms.find((room) => room.id === parseInt(roomId));

  if (!room) {
    return <div className="text-center">Room not found!</div>;
  }

  return (
    <div className='flex'>
      <div className="container flex-col w-2/3 mt-16 p-8"> {/* Updated width to 2/3 for RoomDetail */}
        <h1 className="text-3xl text-ivory font-bold mb-8 text-center">Rooms Details</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
          <div className="relative pb-2/3">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4">{room.name}</h2>
            <p className="text-lg text-gray-700 mb-4">Price: ${room.price} per night</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Amenities:</h3>
              <div className="flex gap-3">
                {room.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-gray-700 bg-gray-200 rounded-full p-3 transition-transform transform hover:scale-110"
                  >
                    <FontAwesomeIcon icon={amenityIcons[amenity]} className="text-xl mr-2" />
                    <span className="text-base">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 p-8 mt-16">
        <Reservation title  = {"Resevation"} button = {"Book Now"} />
      </div>
    </div>
  );
};

export default RoomDetail;
