import {  useState } from 'react'
import MiniRoomsList from "./miniRoomsList";
import RoomModal from '../common/roomModal'
import UpdateRoom from "./updateRoom";
import { PlusCircleIcon } from '@heroicons/react/20/solid'
export default function RoomManagment() {

    const [open, setOpen] = useState(false)
    const addRoom= ()=>{
        setOpen(true)
    }
    return (
        <>
            <main className="">
                <div className="xl:pl-96">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        <h1 className='font-semibold'>Update Room </h1>
                        <UpdateRoom/>
                    </div>
                </div>
            </main>
            <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block pt-20">
                <div className="flex justify-between items-center">
                    <h1 className='font-semibold'> Rooms </h1>
                    <PlusCircleIcon color="#5c5346" width={25} height={25} cursor={'pointer'} onClick={addRoom}/>
                </div>
                <MiniRoomsList/>
                <RoomModal open={open} setOpen={setOpen}/>
            </aside>
        </>
    )
}
