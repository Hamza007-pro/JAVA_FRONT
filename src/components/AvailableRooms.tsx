import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

interface Room {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface AvailableRoomsProps {
  rooms: Room[];
}

const AvailableRooms: React.FC<AvailableRoomsProps> = ({ rooms }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const roomsPerPage = 3;
  
    const offset = currentPage * roomsPerPage;
    const currentRooms = rooms.slice(offset, offset + roomsPerPage);
  
    const pageCount = Math.ceil(rooms.length / roomsPerPage);
  
    const handlePageChange = (selectedPage: { selected: number }) => {
      setCurrentPage(selectedPage.selected);
    };
  
    return (
      <div className="available-rooms">
        <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
        <ul className="divide-y divide-gray-200">
          {currentRooms.map((room: Room) => (
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
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'flex justify-center mt-8'}
            activeClassName={'bg-blue-200 text-white px-4 py-2 rounded'}
            previousClassName={'border border-gray-300 px-4 py-2 rounded-l'}
            nextClassName={'border border-gray-300 px-4 py-2 rounded-r'}
            pageClassName={'border border-gray-300 px-4 py-2'}
            breakClassName={'border border-gray-300 px-4 py-2'}
            disabledClassName={'cursor-not-allowed opacity-50'}
            previousLinkClassName={'text-gray-700'}
            nextLinkClassName={'text-gray-700'}
            pageLinkClassName={'text-gray-700'}
            breakLinkClassName={'text-gray-700'}
            />

      </div>
    );
  };
  
  export default AvailableRooms;