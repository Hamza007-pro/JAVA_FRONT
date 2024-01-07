import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import { Link } from 'react-router-dom';


const RoomGrid = ({rooms} : any) => {

  return (
    <div className="flex flex-col items-center justify-center mt-32 mb-12 min-h-screen overflow-y-auto pt-10">
    <h1 className="text-3xl text-ivory font-bold mb-8">Rooms Available</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {rooms.map((room : any) => (
        <div key={room.id} className="border relative rounded-lg shadow-md overflow-hidden">
          <img src={room.image} alt={room.name} className="w-full h-60 object-cover" />
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md">
            ${room.price} per night
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
            <Link to={`/rooms/${room.id}`}>
            <button className="text-ivory font-bold flex items-center focus:outline-none hover:underline">
              BOOK NOW <ChevronRightIcon className="w-5 h-5 ml-2" />
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default RoomGrid;
