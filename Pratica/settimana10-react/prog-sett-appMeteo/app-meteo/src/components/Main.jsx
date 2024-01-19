import { Container, Row, Col } from "react-bootstrap"
import InputMeteo from "./InputMeteo"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Main = () => {
  const [cities, setCities] = useState()
  const location = useLocation();
	const searchTerms = new URLSearchParams(location.search).get("");

  const handleSearch = async(search) => {
    const resp = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=a829039625b8c3a5900bfd0863a4c234`)
    const data = await resp.json()
    setCities(data)
  }
  

  const initialTitle = "Scopri com'è il tempo nella tua città"
 
  return (
    <>
      <Container>
        <Row>
          <Col xs='12' className="d-flex justify-content-center">
            <InputMeteo handleSearch={handleSearch}/>
          </Col>
          <Col xs='12' className="d-flex justify-content-center">
            <div className="d-flex flex-column">
            {cities ? cities.map((city) => 
              <div className="btn btn-outline-secondary my-3 py-3" key={city.lat} >
              <Link to={`/results/${city.lat}/${city.lon}`} className="text-decoration-none text-black bg-transparent">{city.name}, {city.state}, {city.country}</Link>
              </div>
            ): (
              <h1 className="text-dark mt-5 p-5">{initialTitle.toUpperCase()}</h1>
            )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Main