/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SelectWithIndecator from '../common/selectWithIndecator'
import { Fragment, useState } from 'react'
const people = [
    { id: 1, name: 'Available', online: "bg-green-500" },
    { id: 2, name: 'Reserved', online: "bg-yellow-500" },
    { id: 3, name: 'Occupied', online: "bg-orange-500"},
    { id: 4, name: 'Not Available', online: "bg-red-500" },
    { id: 5, name: 'Being Serviced', online: "bg-slate-500" },
    { id: 6, name: 'Other', online: "bg-blue-500" },
  ]

export default function UpdateRoom() {

    const [selectedState, setSelectedState] = useState(people[0])
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Room Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={20}
                  disabled={true}
                  autoComplete="given-name"
                  className="block pl-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Room Status
              </label>
              <div className="mt-2">
               <SelectWithIndecator  selectedState={selectedState} setSelectedState={setSelectedState}/>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Room Price
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Room_Style" className="block text-sm font-medium leading-6 text-gray-900">
              Room Style
              </label>
              <div className="mt-2">
                <select
                  id="Room_Style"
                  name="Room_Style"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>STANDARD</option>
                  <option>DELUXE</option>
                  <option>FAMILY_SUITE</option>
                  <option>BUSINESS_SUITE </option>
                </select>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
