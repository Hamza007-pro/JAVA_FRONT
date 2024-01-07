type Statuses = {
    Available: string;
    Reserved: string;
    Occupied: string;
    Not_Available: string;
    Being_Serviced: string;
    Other: string;
};
const statuses = { Available: 'text-green-500 bg-green-500/10',
                    Reserved: 'text-yellow-500 bg-yellow-500/10',
                    Occupied: 'text-orange-500 bg-orange-500/10',
                    Not_Available: 'text-red-500 bg-red-500/10',
                    Being_Serviced: 'text-slate-500 bg-slate-500/10',
                    Other: 'text-blue-500 bg-blue-500/10', }
const activityItems = [
    {
        roomNumber:'20',
        roomStyle:'Standerd',
        price:'50',
        status: 'Available',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber:'21',
        roomStyle:'Deluxe',
        price:'300',
        status: 'Reserved',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber:'22',
        roomStyle:'Family Suite',
        price:'100',
        status: 'Not_Available',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber:'23',
        roomStyle:'Business Suite',
        price:'200',
        status: 'Occupied',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
    {
        roomNumber:'24',
        roomStyle:'Standerd',
        price:'50',
        status: 'Available',
        from: '2023-01-23T11:00',
        to: '2023-02-23T11:00',
    },
  
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function RoomsList() {
    return (
        <div className="">
            <table className="mt-6 w-full whitespace-nowrap text-left">
                <colgroup>
                    <col className="w-full sm:w-4/12" />
                    <col className="lg:w-4/12" />
                    <col className="lg:w-2/12" />
                    <col className="lg:w-1/12" />
                    <col className="lg:w-1/12" />
                </colgroup>
                <thead className="border-b border-white/10 text-sm leading-6 ">
                    <tr>
                        <th scope="col" className="hidden py-2 pl-0 font-semibold md:table-cell">
                            Room Number
                        </th>
                        <th scope="col"  className="hidden py-2 pl-0 font-semibold md:table-cell">
                            Room Style
                        </th>
                        <th scope="col"  className="hidden py-2 pl-0 font-semibold md:table-cell">
                            Price
                        </th>
                        <th scope="col"  className="hidden py-2 pl-0 font-semibold md:table-cell">
                            Status
                        </th>
                        <th scope="col"  className="hidden py-2 pl-0 font-semibold md:table-cell">
                            From
                        </th>
                        <th scope="col"  className="hidden py-2 pl-0 font-semibold md:table-cell">
                            To
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {activityItems.map((item) => (
                        <tr key={item.roomNumber}>
                            <td className="sm:pl-6 ">
                                <div className="flex items-center">
                                    <div className="truncate text-sm font-medium leading-6 ">{item.roomNumber}</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                <div className="flex gap-x-3">
                                    <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-white/10">
                                        {item.roomStyle}
                                    </div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                <div className="flex gap-x-3">
                                    <div className="rounded-md px-2 py-1 text-md font-medium  ring-1 ring-inset ring-white/10">
                                        {item.price} $
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                    <time className="text-gray-400 sm:hidden" dateTime={item.from}>
                                        {item.from}
                                    </time>
                                    <div className={classNames(statuses[item.status as keyof Statuses], 'flex-none rounded-full p-1')}>
                                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                    </div>
                                    <div className="hidden  sm:block">{item.status}</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                                {item.from}
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                                <time dateTime={item.to}>{item.to}</time>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
