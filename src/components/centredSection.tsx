export default function CentredSection() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-canvas bg-center bg-no-repeat bg-cover px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Choose from a wide range of exclusive apartments.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        These popular destinations have a lot to offer
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="w"
                            className="rounded-md bg-ivory px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
