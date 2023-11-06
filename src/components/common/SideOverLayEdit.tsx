import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function SideOverlayEdit(props: any) {
    const [classState, setClassState] = useState(false);
    const [AttributeName, setAttributeName] = useState();
    const [constraints,setConstraints] = useState(props.attribute.Constraints);
    
    useEffect(() => {
        setConstraints(props.attribute.Constraints);
        setAttributeName(props.attribute.Name)
    },[props.attribute.Constraints])
    
    const updateAttributeName = (event: any) => {
        setAttributeName(event.target.value);
    }

    const checkInputValue = () => {
        if (AttributeName == "") {
            setClassState(true)
        } else {
            setClassState(false);
        }
    }

    const saveAttributeModifications = () => {
        props.attribute.Name = AttributeName;
        props.setState(false)
    }
    const onDeleteConstraint = (name: string) => {
        props.attribute.Constraints.splice(
            props.attribute.Constraints.findIndex((item:any) => item.name === name),1
        )
        const updatedArray = constraints.filter((item:any) => item.name !== name);
        setConstraints(updatedArray);

        console.log(props.attribute);
    }
    return (
        <Transition.Root show={props.slideOverlayState} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.setState}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                        <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                        Edite Attribute : {props.attribute.Name}
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                            onClick={() => props.setState(false)}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="relative">
                                                    <label htmlFor="Project_Name" className="block text-sm font-medium leading-6 text-gray-900 text-left pb-2">
                                                        Attribute Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="Project_Name"
                                                        id="Project-Name"
                                                        style={classState ? {} : { borderColor: 'green' }}
                                                        className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 font-medium shadow-sm ring-1 ring-inset ${classState ? 'ring-red-300 focus:ring-red-400' : 'ring-gray-300 focus:ring-gray-400'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6`}
                                                        placeholder="Jane Smith"
                                                        onChange={updateAttributeName}
                                                        onKeyUp={checkInputValue}
                                                        value={AttributeName}
                                                    />
                                                    {
                                                        classState ? (<label htmlFor="comment" className="block text-xs font-medium text-red-900 text-left absolute pt-2 ">
                                                            Invalid Attribute Name
                                                        </label>) : (<span></span>)
                                                    }
                                                </div>
                                                <div className='pt-8'>
                                                    <div className="relative">
                                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                                            <div className="w-full border-t border-gray-300" />
                                                        </div>
                                                        <div className="relative flex justify-start">
                                                            <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Attribute Constraints</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pt-4 px-8'>
                                                    <ul role="list" className="divide-y divide-gray-100">
                                                        {constraints.map((constraint: any) => (
                                                            <li key={constraint.name} className="flex cursor-pointer items-center justify-between gap-x-6 py-5">
                                                                <div className="min-w-0">
                                                                    <div className="flex items-start gap-x-3">
                                                                        <p className="text-sm font-semibold leading-6 text-gray-900">{constraint.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-none items-center gap-x-4">
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
                                                                                        <span className={classNames(
                                                                                            active ? 'bg-gray-50' : '',
                                                                                            'block cursor-pointer px-3 py-1 text-sm leading-6 text-gray-900'
                                                                                        )}
                                                                                        onClick={()=>onDeleteConstraint(constraint.name)}
                                                                                        >Delete</span>
                                                                                    )}
                                                                                </Menu.Item>
                                                                            </Menu.Items>
                                                                        </Transition>
                                                                    </Menu>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                            <button
                                                type="button"
                                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                                                onClick={() => props.setState(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                                onClick={saveAttributeModifications}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
