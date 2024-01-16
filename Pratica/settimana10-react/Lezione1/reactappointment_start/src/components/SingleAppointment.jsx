import {RiDeleteBack2Fill} from 'react-icons/ri'

const SingleAppointment = ({item, deleteAppointment}) => {
  return(
    <article>
      <img src={item.img} alt={item.nome} className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{item.nome}</h4>
          <button className="btn">
            <RiDeleteBack2Fill className='icon' onClick={() => deleteAppointment(item.id)} />
          </button>
        </div>
        <p>{item.stato}</p>
      </div>
    </article>
  )
}

export default SingleAppointment