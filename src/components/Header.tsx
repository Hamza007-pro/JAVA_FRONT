import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ReservationPicker from './reservationPicker'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Rooms', href: '#' },
  { name: 'Reservation', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Blog', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-full">
          <div className="px-6 pt-6 lg:max-w-5xl lg:pl-8 lg:pr-0">
            <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
              <a href="w" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Your Company"
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-ivory">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-1 items-center justify-end gap-x-6">
                <a href="w" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
                  Log in
                </a>
                <a
                  href="w"
                  className="rounded-md bg-ivory px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </a>
              </div>
            </nav>
          </div>
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="w" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="w"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

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
                    Apartments for rent in Miami.{' '}
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
