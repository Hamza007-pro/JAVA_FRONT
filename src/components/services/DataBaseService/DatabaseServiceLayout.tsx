import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


import { navigation, userNavigation } from '../../../data/DummyData';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function DataBaseServiceLayout(props: any) {

    
    return (
        <div>

            {/* Static sidebar for desktop */}
            <div className=" hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto  lg:pb-4 lg:shadow-lg border-gray-200 bg-white">
                <div className="flex h-16 shrink-0 items-center justify-center">
                    <img
                        className="h-8 w-auto"
                        src="logoCoreTech.png"
                        alt="Your Company"
                    />
                </div>
                <nav className="mt-8 lg:fixed">
                    <ul role="list" className="flex flex-col items-center space-y-1 w-full">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Menu as="div"
                                    className='group flex gap-x-3 rounded-md p-2 text-sm leading-6  '
                                >
                                    <div>
                                        <Menu.Button className="mx-auto rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
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
                                        <Menu.Items className="absolute -right-44 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <span className='text-sm py-1 text-center font-medium mx-auto block'>{item.name}</span>
                                            <div className="py-1">
                                                {item.links?.map((link) => (
                                                    <Menu.Item key={link.value}>
                                                        {({ active }) => (
                                                            <div 
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'flex w-full px-2'
                                                            )} onClick={()=>props.handleMenuClick(link.BtnEvent)}>
                                                                <link.icon className="flex h-5 w-5 my-auto" aria-hidden="true" />
                                                                <span className='px-4 py-2 text-sm cursor-pointer font-medium'>
                                                                    {link.name}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default DataBaseServiceLayout;