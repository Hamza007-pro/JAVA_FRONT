/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

type Statuses = {
    Available: string;
    Reserved: string;
    Occupied: string;
    Not_Available: string;
    Being_Serviced: string;
    Other: string;
};
const statuses = {
    Available: 'text-green-500 bg-green-500/10',
    Reserved: 'text-yellow-500 bg-yellow-500/10',
    Occupied: 'text-orange-500 bg-orange-500/10',
    Not_Available: 'text-red-500 bg-red-500/10',
    Being_Serviced: 'text-slate-500 bg-slate-500/10',
    Other: 'text-blue-500 bg-blue-500/10',
}
const activityItems = [
    {
        roomNumber: '20',
        roomStyle: 'Standerd',
        price: '50',
        status: 'Available',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber: '21',
        roomStyle: 'Deluxe',
        price: '300',
        status: 'Reserved',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber: '22',
        roomStyle: 'Family Suite',
        price: '100',
        status: 'Not_Available',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber: '23',
        roomStyle: 'Business Suite',
        price: '200',
        status: 'Occupied',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber: '24',
        roomStyle: 'Standerd',
        price: '50',
        status: 'Available',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },

]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function MiniRoomsList() {
    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <ul role="list" className="divide-y divide-gray-100">
            {activityItems.map((item) => (
                <li key={item.roomNumber} className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                <a href='#' className="hover:underline">
                                    {item.roomStyle}
                                </a>
                            </p>
                            <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                <a href='#' className="truncate hover:underline">
                                    Room Number : {item.roomNumber}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className={classNames(statuses[item.status as keyof Statuses], 'flex-none rounded-full p-1')}>
                                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">{item.status}</p>
                            </div>
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
                                                Edit Room<span className="sr-only">, {item.roomNumber}</span>
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
                                                Delete<span className="sr-only">, {item.roomNumber}</span>
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
