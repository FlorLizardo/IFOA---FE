import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"
import { setNome, setCognome, setEta, setAllData } from "../actions/utenteActions"

const Profile = () => {
  const styles = {
    divContainer: {
      minWidth: '500px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      flexDirection: 'column' 
    },
    divInputs: {
      display: 'flex', 
      justifyContent: 'space-between', 
      flexDirection: 'row' 
    }
  }

  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    nome: useSelector(state => state.utente.nome),
    cognome: useSelector(state => state.utente.cognome),
    eta: useSelector(state => state.utente.eta)
  })

  const setAll = () => {
    dispatch(setAllData(userData))
  }

  const handleChangeData = (tipoDiDato) => {
    switch (tipoDiDato) {
      case 'nome':
        dispatch(setNome(userData.nome))
        break;
      case 'cognome':
        dispatch(setCognome(userData.cognome))
        break;
      case 'eta':
        dispatch(setEta(userData.eta))
        break;
      default:
        break;
    }
  }

  return (
    <div>
        <h1>Profilo</h1>
        <div>
            <p>Ciao , sappi che hai  anni</p>
        </div>
        <div style={styles.divContainer}>
            <div style={styles.divInputs}>
            <input type="text" value={userData.nome} onChange={(e) => setUserData({...userData, nome: e.target.value})}/>
            <button onClick={() => {handleChangeData('nome')}}>Aggiorna Nome</button>
            </div>
            <div style={styles.divInputs}>
            <input type="text" value={userData.cognome} onChange={(e) => setUserData({...userData, cognome: e.target.value})}/>
            <button onClick={() => {handleChangeData('cognome')}}>Aggiorna Cognome</button>
            </div>
            <div style={styles.divInputs}>
            <input type="text" value={userData.eta} onChange={(e) => setUserData({...userData, eta: e.target.value})}/>
            <button onClick={() => {handleChangeData('eta')}}>Aggiorna eta</button>
            </div>
        </div>
        <button onClick={setAll}>Aggiorna tutti i dati</button>
        <Link to="/">Torna alla home</Link>
    </div>
)
}

export default Profile