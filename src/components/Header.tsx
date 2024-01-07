import Nav from '../common/nav'
import ReservationPicker from './reservationPicker'

export default function Header() {

  return (
    <div className="bg-white">

      <Nav />

      <div className="relative">
        <div className="mx-auto max-w-full">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-full">
            <svg
              className="absolute inset-y-0  hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{left:'40rem'}}
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative pl-20 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-full pl-20 lg:mx-0 lg:max-w-3xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Apartments for rent .{' '}
                    <a href="w" className="whitespace-nowrap font-semibold text-gold">

                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-ivory sm:text-6xl">
                  From $59 per night.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Search millions of apartments, houses, and private office suites
                  for rent with our exclusive hotels & apartments app.
                </p>
                <div className="mt-10 flex items-center gap-x-6 h-36">
                </div>
                <div className="mt-10 flex items-center gap-x-6 absolute bottom-36 left-72 w-auto">
                  <ReservationPicker />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={require('../assets/images/room.jpg')}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
