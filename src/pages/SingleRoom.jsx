import Nav from '../common/nav';
import RoomDetail from '../components/RoomDetail';

const SingleRoom = ({ rooms }) => {
  return (
    <div className="bg-white">
      <Nav />
      <RoomDetail rooms={rooms} />
    </div>
  );
};

export default SingleRoom;
