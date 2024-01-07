import Button from "../common/button"
import DatePicker from "../common/datePicker"
import NumberPicker from "../common/numberPicker"

const stats = [
    { id: 1, name: 'Check In',component:<DatePicker/>},
    { id: 2, name: 'Check Out',component:<DatePicker/>},
    { id: 3, name: 'Room',component:<NumberPicker/>},
    { id: 4, name: 'Guests',component:<NumberPicker/>},
    { id: 5, name: '',component:<Button text={'Search Room'}/>},
  ]
  
  export default function ReservationPicker() {
    return (
            <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm text-left pl-3 font-semibold leading-6 text-gray-600">{stat.name}</dt>
                    {stat.component}
                </div>
              ))}
            </dl>
    )
  }