import ReservationDetails from "./reservationDetails";
import ReservationList from "./reservationList";
import ReservationTable from "./reservationTable";


export default function Reservations() {
    return (
        <>
            <main className="">
                <div className="xl:pl-96">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        <h1 className='font-semibold'> Reservations </h1>
                        <ReservationTable/>
                    </div>
                </div>
            </main>
            <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block pt-20">
                <h1 className='font-semibold'> Comming soon </h1>
                
            </aside>
        </>
    )
}
