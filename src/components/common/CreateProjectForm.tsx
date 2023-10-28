import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'


function CreateProjectForm(props: any) {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    const [inputValues, setInputValues] = useState({
        Project_Name: "",
        Project_Description: ""
    })
    const[classState,setClassState]=useState(false);

    const onchangeInputHandle = (event:any)=>{
        setInputValues({
            ...inputValues,
           [event.target.name] : event.target.value
        })
        if(inputValues.Project_Name == ""){
            setClassState(true)
        }else{
            setClassState(false)
        }
    }

    const onClickCreateHandle = ()=>{
        if(inputValues.Project_Name == ""){
            setClassState(true)
        }else{
            props.setProjectInfo(inputValues);
            props.setCreateProject(true);
            setOpen(false);
            setClassState(false)
        }
    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div className="mx-auto flex  items-center justify-center">
                                        <h3 className='text-lg font-semibold leading-6 text-gray-900'>Create a New Project </h3>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <div className="mt-2 px-2">
                                            <div className="relative">
                                                <label
                                                    htmlFor="Project-Name"
                                                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                                >
                                                    Project Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="Project_Name"
                                                    id="Project-Name"
                                                    style={classState?{}:{borderColor:'green'}}
                                                    className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 font-medium shadow-sm ring-1 ring-inset ${classState?'ring-red-300':'ring-gray-300'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6`}
                                                    placeholder="Jane Smith"
                                                    onChange={onchangeInputHandle}
                                                />
                                                {
                                                    classState?(<label htmlFor="comment" className="block text-xs font-medium text-red-900 text-left">
                                                    Invalid project Name
                                                </label>):(<span></span>)
                                                }
                                            </div>
                                        </div>
                                        <div className="mt-10 px-2">
                                            <div>
                                                <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                                                    Project Description
                                                </label>
                                                <div className="mt-2">
                                                    <textarea
                                                        rows={4}
                                                        name="Project_Description"
                                                        id="comment"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={''}
                                                        onChange={onchangeInputHandle}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                                        onClick={() => {  onClickCreateHandle() }}
                                    >
                                        Create Project
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                        onClick={() => { setOpen(false); props.setCreateProject(false); props.setShowModal(false)}}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default CreateProjectForm;