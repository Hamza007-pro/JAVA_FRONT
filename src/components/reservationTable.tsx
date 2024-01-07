import Modal from "../common/modal"
import { Fragment, useRef, useState } from 'react'
const people = [
    { name: 'Lindsay Walton', email: 'lindsay.walton@example.com',phoneNumber:'0696194261', roomStyle: 'Family Suite' },
    // More people...
  ]
  
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function ReservationTable() {
    const [open, setOpen] = useState(false)

    const editReservation= ()=>{
        setOpen(true)
    }
    return (
      <div className="px-4 sm:px-6 lg:px-8 pt-5">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <p className="mt-2 text-sm text-gray-700">
              A list of all the Reservations including their name, email and room style.
            </p>
          </div>
          
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Room Style
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person, personIdx) => (
                    <tr key={person.email}>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                      >
                        {person.name}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                        )}
                      >
                        {person.email}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                        )}
                      >
                        {person.phoneNumber}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                      >
                        {person.roomStyle}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                        )}
                      >
                        <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={editReservation}>
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                        <Modal open={open} setOpen={setOpen}/>
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
  