import SingleAppointment from "./SingleAppointment"
import data from '../data.jsx'

const ListAppointments = ({data, deleteAppointment}) => {
  return (
    <>
      <ul className="user-list">
        {data.map((item) => (
          <li key={item.id}>
            <SingleAppointment item={item} deleteAppointment={deleteAppointment}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListAppointments