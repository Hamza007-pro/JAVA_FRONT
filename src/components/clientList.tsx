/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon,PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phoneNumber:'0696194261',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phoneNumber:'0696194261',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phoneNumber:'0696194261',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phoneNumber:'0696194261',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phoneNumber:'0696194261',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phoneNumber:'0696194261',
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function ClientList() {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href='#' className="hover:underline">
                  {person.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                <a href={`mailto:${person.email}`} className="truncate hover:underline">
                  {person.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="justify-between flex sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 text-xs leading-5 text-gray-500">
                 {person.phoneNumber}
                </p>
            </div>
            <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        View profile<span className="sr-only">, {person.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Message<span className="sr-only">, {person.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  )
}
