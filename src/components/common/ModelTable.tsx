import { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import SideOverlayEdit from './SideOverLayEdit';

import { colors } from '../../data/DummyData';
import { CheckCircleIcon,KeyIcon } from '@heroicons/react/20/solid'



export default function ModelTable(props: any) {
    const [tableName, setTableName] = useState(props.tableTarget.Name);
    const [tableColor, setTableColor] = useState('#ffffff');
    const [classState, setClassState] = useState(false);
    const [open, setOpen] = useState(false);
    const [targetAttribute, setTargetAttribute] = useState();
    

    const updateTableName = (event: any) => {
        setTableName(event.target.value);
    }

    const checkInputValue = () => {
        if (tableName == "") {
            setClassState(true)
        } else {
            setClassState(false);
        }
    }

    return (
        <>
            {targetAttribute && (<SideOverlayEdit slideOverlayState={open} setState={setOpen} attribute={targetAttribute} />)}
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
                                onKeyUp={checkInputValue}
                            />
                            {
                                classState ? (<label htmlFor="comment" className="flex text-xs font-medium text-red-900 text-left pt-2 absolute">
                                    Invalid Table Name
                                </label>) : (<span></span>)
                            }
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
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 text-center">
                                            Constraints
                                            <div className='grid grid-cols-7 text-center'>
                                                <span className='text-center pt-2'>Primary Key</span>
                                                <span className='text-center pt-2'>Foriegn Key</span>
                                                <span className='text-center pt-2'>Auto Increment</span>
                                                <span className='text-center pt-2'>Not Null</span>
                                                <span className='text-center pt-2'>Unique</span>
                                                <span className='text-center pt-2'>Check</span>
                                                <span className='text-center pt-2'>Default</span>
                                            </div>
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {props.tableTarget.Attributes.map((attribute:any) => (
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
                                                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium">
                                                    <KeyIcon  className="flex h-5 w-5 my-auto text-yellow-400"/>
                                                    <KeyIcon  className="flex h-5 w-5 my-auto text-grey-400"/>
                                                </span>
                                            </td>
                                            <td className='grid grid-cols-7 whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                                                <div className="flex h-6 items-center mx-auto">
                                                    <input
                                                        id="PrimaryKey"
                                                        aria-describedby="PrimaryKey"
                                                        name="PrimaryKey"
                                                        type="checkbox"
                                                        disabled={true}
                                                        value={'PK'}
                                                        checked={true}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="flex h-6 items-center mx-auto">
                                                    <input
                                                        id="ForeignKey"
                                                        aria-describedby="ForeignKey"
                                                        name="ForeignKey"
                                                        type="checkbox"
                                                        disabled={true}
                                                        value={'FK'}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="flex h-6 items-center mx-auto">
                                                    <input
                                                        id="AutoIncrement"
                                                        aria-describedby="AutoIncrement"
                                                        name="AutoIncrement"
                                                        type="checkbox"
                                                        disabled={true}
                                                        value={'AI'}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="flex h-6 items-center mx-auto">
                                                    <input
                                                        id="NotNull"
                                                        aria-describedby="NotNull"
                                                        name="NotNull"
                                                        type="checkbox"
                                                        disabled={true}
                                                        value={'NN'}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="flex h-6 items-center mx-auto">
                                                    <input
                                                        id="Unique"
                                                        aria-describedby="Unique"
                                                        name="Unique"
                                                        type="checkbox"
                                                        disabled={true}
                                                        value={'U'}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="flex h-6 items-center mx-auto">
                                                    <input
                                                        id="Check"
                                                        aria-describedby="Check"
                                                        name="Check"
                                                        type="checkbox"
                                                        disabled={true}
                                                        value={'C'}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                                <div className="flex h-6 items-center mx-auto">
                                                    <input
                                                        id="Default"
                                                        aria-describedby="Default"
                                                        name="Default"
                                                        type="checkbox"
                                                        disabled={true}
                                                        value={'D'}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    onClick={() => { setOpen(true); setTargetAttribute(attribute) }}
                                                >
                                                    <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}