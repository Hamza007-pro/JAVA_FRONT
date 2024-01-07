import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import React from 'react';
import { Link } from 'react-router-dom';

interface Room {
  id: number;
  name: string;
  price: number;
  image: string;
  // Add more properties as needed
}

interface AvailableRoomsProps {
  rooms: Room[];
}

const AvailableRooms: React.FC<AvailableRoomsProps> = ({ rooms }) => {
  return (
    <div className="available-rooms">
      <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
      <ul className="divide-y divide-gray-200">
        {rooms.map((room: Room) => (
          <li key={room.id} className="py-4 flex">
            <img
              src={room.image}
              alt={room.name}
              className="w-72 h-72 object-cover object-center rounded-lg mr-4"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600">Price: ${room.price} per night</p>
              </div>
              <div className="mt-auto flex justify-end">
                <Link to={`/rooms/${room.id}`}>
                  <button className="text-ivory font-bold flex items-center focus:outline-none hover:underline">
                    BOOK NOW <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableRooms;
