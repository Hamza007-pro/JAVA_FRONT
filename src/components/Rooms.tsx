import RoomsList from "./roomsList";

export default function Rooms() {
    return (
        <>
            <main className="">
                <div className="">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        <h1 className='font-semibold'> Rooms </h1>
                        <RoomsList/>
                    </div>
                </div>
            </main>
        </>
    )
}