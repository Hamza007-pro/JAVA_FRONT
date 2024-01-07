import ReservationDetails from "./reservationDetails";
import ReservationList from "./reservationList";


export default function NewReservations() {
    return (
        <>
            <main className="">
                <div className="xl:pl-96">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        <ReservationDetails />
                    </div>
                </div>
            </main>
            <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block pt-20">
                <h1 className='font-semibold'>New Reservations </h1>
                <ReservationList />
            </aside>
        </>
    )
}