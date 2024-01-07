import Nav from "../common/nav";
import RoomGrid from "../components/RoomGrid";


export default function Rooms({rooms}) {
  return (
    <div className="bg-white ">
        <Nav/>
        {/* <Body/> */}
        <RoomGrid rooms={rooms}/>
    </div>
  )
}
