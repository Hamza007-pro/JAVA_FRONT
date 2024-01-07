import SimpleSelect from "./simpleSelect";

export default function ActionPanel() {
    return (
      <div className="bg-white shadow sm:rounded-lg mt-28">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Reservation State</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              In any case you need to call client and tell him state of his Reservation 
            </p>
          </div>
          <div className="mt-5">
            <SimpleSelect/>
          </div>
        </div>
      </div>
    )
  }
  