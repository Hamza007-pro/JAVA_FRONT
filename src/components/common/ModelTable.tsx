import { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { colors } from '../../data/DummyData';


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ModelTable(props: any) {
    const [tableName, setTableName] = useState(props.tableTarget.Name);
    const [tableColor, setTableColor] = useState('#ffffff');
    console.log(props.tableTarget)
    const updateTableName = (event: any) => {
        setTableName(event.target.value);
    }

    const changeTableColor = (event: any) => {
        setTableColor(event.target.id);
    }
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto pt-10 flex">
                    <div className="relative w-72 mr-5">
                        <label
                            htmlFor="Project-Name"
                            className="absolute -top-3 left-2 inline-block bg-white px-1 text-base font-medium text-gray-900"
                        >
                            Table Name
                        </label>
                        <input
                            type="text"
                            name="Project_Name"
                            id="Project-Name"
                            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-10"
                            placeholder="Jane Smith"
                            value={tableName}
                            onChange={updateTableName}
                        />
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div className='h-full flex my-auto items-center'>
                            <Menu.Button style={{ backgroundColor: tableColor }} className="inline-flex w-9 h-9 justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">

                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-2 grid grid-cols-4">
                                    {
                                        colors.map((color) => (
                                            <Menu.Item key={color}>
                                                <div className=' flex w-8 h-8 border border-gray-500 rounded-md my-1 content-center m-auto cursor-pointer' onClick={() => setTableColor(color)}>
                                                    <div style={{ backgroundColor: color }} className={`w-6 h-6 m-auto items-center rounded-md flex`}></div>
                                                </div>
                                            </Menu.Item>
                                        ))
                                    }
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>

            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 max-h-[70vh] min-h-[30vh]">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Type
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Constraints
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {props.tableTarget.Attributes.map((attribute: any) => (
                                    <tr key={attribute.Name}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">{attribute.Name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <div className="text-gray-900">{attribute.Type}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                Active
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                Active
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}