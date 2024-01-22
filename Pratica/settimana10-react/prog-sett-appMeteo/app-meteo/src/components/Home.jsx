import { Container, Row, Col, Card } from "react-bootstrap"
import InputMeteo from "./InputMeteo"
import { useState } from "react"
import ResultsSearch from "./ResultsSearch"
import AlertError from "./AlertError"
import InitialTitle from "./InitialTitle"


const Home = () => {
    const styles = {
		container: {
			marginTop: "3rem",
      minHeight: '100vh'
		},
	};

  const [search, setSearch] = useState('')
	const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const myFetchWeather = async () => { //fetch dei dati del giorno
    try{
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=a829039625b8c3a5900bfd0863a4c234&lang=it&units=metric`
      );
      const data = await resp.json();
      setWeather(data);
      setError(false) //gestione dell'errore
    }
    catch(err) {
      setError(true)
    }
	};
  
  return (
    <>
      <Container fluid style={styles.container}>
        <Row>
          {error && <AlertError />} {/*se 'error' è true appare l'alert */}
          <Col xs='12' className="d-flex justify-content-center mb-5">
            <InputMeteo myFetchWeather={myFetchWeather} search={search} setSearch={setSearch}/>
          </Col>
          </Row>
          <Row>
              {weather.id ? (
                <>
                <ResultsSearch weather={weather} /> {/* componente con props */}
                </>
             ) 
             : (
              <InitialTitle /> //componente del titolo iniziale della pagina
             )}
             </Row>       
      </Container>
    </>
  )
}

export default Home

