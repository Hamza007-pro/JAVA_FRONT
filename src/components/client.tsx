import Button from "../common/button";
import { UserPlusIcon } from '@heroicons/react/20/solid'
import ClientList from "./clientList";
import ClientDetails from "./clientDetails";
import ClientModal from '../common/clientModal';
import {  useState } from 'react'

export default function Client() {

    const [open, setOpen] = useState(false)
    const addClient= ()=>{
        setOpen(true)
    }

    return (
        <>
            <main className="">
                <div className="xl:pl-96">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        <h1 className='font-semibold'> Client Details </h1>
                        <ClientDetails/>
                    </div>
                </div>
            </main>
            <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block pt-20">
                <div className="flex justify-between items-center">
                    <h1 className='font-semibold'> Clients </h1>
                    <UserPlusIcon color="#5c5346" width={30} height={30} cursor={'pointer'} onClick={addClient}/>
                </div>
                <ClientList/>
                <ClientModal open={open} setOpen={setOpen}/>
            </aside>
        </>
    )
}