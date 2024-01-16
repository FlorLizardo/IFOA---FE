import { useState } from 'react'
import data from './data'
import ListAppointments from './components/ListAppointments'


function App() {
  const [appointments, setAppointments] = useState(data)

  const reloadList = () => {
    setAppointments(data)
  }

 const deleteAppointment = (id) => {
  setAppointments((actualAppointment) => actualAppointment.filter((item) => item.id !== id))
 }


  return (
    <section>
      <div className='container'>
        <h2 style={{color: 'var(--bg-blue)'}}>Prossimi Appuntamenti</h2>
        <div className='people-list'>
          <ListAppointments data={appointments} deleteAppointment={deleteAppointment}/>
        </div>
        <div className='btn-group'>
          <button className='btn btn-reset' onClick={reloadList}>Ricarica Lista</button>
          <button className='btn btn-delete' onClick={() => setAppointments([])}>Cancella tutto</button>
        </div>
      </div>
    </section>
  )
}

export default App
