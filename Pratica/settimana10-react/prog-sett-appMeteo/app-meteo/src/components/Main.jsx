import { Container, Row, Col, Card } from "react-bootstrap"
import InputMeteo from "./InputMeteo"
import { useState } from "react"
import ResultsSearch from "./ResultsSearch"


const Main = () => {
  const [search, setSearch] = useState('')
	const [weather, setWeather] = useState({});

  const styles = {
		container: {
			marginTop: "3rem",
      minHeight: '100vh'
		},
	};

  const myFetchWeather = async () => {
		const resp = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=a829039625b8c3a5900bfd0863a4c234&lang=it&units=metric`
		);
		const data = await resp.json();
		setWeather(data);
	};
  
  const initialTitle = "Scopri com'è il tempo nella tua città"
 
  return (
    <>
      <Container fluid style={styles.container}>
        <Row>
          <Col xs='12' className="d-flex justify-content-center mb-5">
            <InputMeteo myFetchWeather={myFetchWeather} search={search} setSearch={setSearch}/>
          </Col>
          </Row>
          <Row>
              {weather.id ? (
                <>
                <ResultsSearch weather={weather} />
                {/* <Row> */}
                  {/* <Col>
                    <p> Temperatura: {forecast?.[0].main.temp}</p>
                    
                  </Col> */}
                {/* </Row> */}
                </>
             
             ) 
             : (
              <Col xs='12' className="text-center">
             <p>{initialTitle}</p>
             </Col>
             )}
             </Row>

            {/* {cities ? cities.map((city, index) => 
              <div className="btn btn-outline-secondary my-3 py-3" key={index} >
              <Link to={`/results/${city.lat}/${city.lon}`} className="text-decoration-none text-black bg-transparent">{city.name}, {city.state}, {city.country}</Link>
              </div>
            ): (
              <h1 className="text-dark mt-5 p-5">{initialTitle.toUpperCase()}</h1>
            )} */}
           
        
      </Container>
    </>
  )
}

export default Main

