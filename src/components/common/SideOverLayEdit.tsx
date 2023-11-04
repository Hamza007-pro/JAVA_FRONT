import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition, Switch } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { constraints } from '../../data/DummyData'
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function SideOverlayEdit(props: any) {
    const [classState, setClassState] = useState(false);
    const [AttributeName, setAttributeName] = useState();
    const [enabled, setEnabled] = useState([
        { name: 'Primary Key', state: false },
        { name: 'Unique', state: false },
        { name: 'Auto Increment', state: false },
        { name: 'Not Null', state: false },
        { name: 'Default', state: false },
        { name: 'Check', state: false },
        { name: 'Foreign Key', state: false }])

    useEffect(() => {
        setAttributeName(props.attribute.Name);
    })
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
       
    }
    const onChangeConstraintState = (name:string) => {
        setEnabled((prevState)=>
                prevState.map((conSwitch) => conSwitch.name === name?{...conSwitch,state:!conSwitch.state}:conSwitch)
            )
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
                                                    {
                                                        enabled.map((constraint) => (
                                                            <Switch.Group key={constraint.name} as="div" className="flex items-center justify-between py-4">
                                                                <span className="flex flex-grow flex-col">
                                                                    <Switch.Label as="span" className="text-md font-medium leading-6 text-gray-900" passive>
                                                                        {constraint.name}
                                                                    </Switch.Label>
                                                                </span>
                                                                <Switch
                                                                    checked={constraint.state}
                                                                    onChange={()=>onChangeConstraintState(constraint.name)}
                                                                    className={classNames(
                                                                        constraint.state ? 'bg-indigo-600' : 'bg-gray-200',
                                                                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                                                    )}
                                                                >
                                                                    <span
                                                                        className={classNames(
                                                                            constraint.state ? 'translate-x-5' : 'translate-x-0',
                                                                            'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                                        )}
                                                                    >
                                                                        <span
                                                                            className={classNames(
                                                                                constraint.state ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                                                                                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        >
                                                                            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                                                                <path
                                                                                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        <span
                                                                            className={classNames(
                                                                                constraint.state ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                                                                                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        >
                                                                            <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                                                                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                                                            </svg>
                                                                        </span>
                                                                    </span>
                                                                </Switch>
                                                            </Switch.Group>
                                                        ))
                                                    }
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
