import { Fragment,useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

import Attribute from '../../helpers/classes/Attribute';

import EditeTable from './EditeTable';


const statuses: any = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function TableDesigne(props: any) {

    const [open, setOpen] = useState(false)
    function editTable (){
            setOpen(true)
    }

    return (
        <div key={props.table.Id} className="overflow-hidden rounded-xl border border-gray-200 w-72 focus:z-50 focus:absolute">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <div className="text-sm font-medium leading-6 text-gray-900">{props.table.Name}</div>
                <Menu as="div" className="relative ml-auto">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
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
                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <span
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer'
                                        )}
                                    >
                                        View
                                    </span>
                                )}
                            </Menu.Item>
                            <Menu.Item>

                                {({ active }) => (
                                    <span
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer'
                                        )}
                                        onClick={editTable}
                                    >
                                        Edit
                                    </span>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            {
                props.table.Attributes.map((attribute: Attribute) =>(                    
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-2 text-sm leading-6 bg-white">
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt className="text-gray-500">{attribute.Name}</dt>
                            <dd className="flex items-start gap-x-2">
                                <div className="font-medium text-gray-900">{attribute.Type}</div>
                                <div
                                    className={classNames(
                                        statuses.Overdue,
                                        'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                    )}
                                >
                                    status
                                </div>
                            </dd>
                        </div>
                    </dl>
                ))
            }
            {open && (<EditeTable open={open} setOpen={setOpen} targetTable={props.table}/>)}
        </div>
    )
}