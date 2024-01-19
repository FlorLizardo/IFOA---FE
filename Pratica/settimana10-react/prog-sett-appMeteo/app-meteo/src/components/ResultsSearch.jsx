import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useLocation, useParams } from "react-router-dom"

const ResultsSearch = () => {
  
  const [weather, setWeather] = useState({})
  const lat = useParams()
  console.log(lat);
  const lon = useParams()
  console.log(lon);

  const myFetchWeather = async() => {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a829039625b8c3a5900bfd0863a4c234`)
    const data = await resp.json()
    setWeather(data)
    console.log(data);
  }

  useEffect(() => {
    myFetchWeather()
  }, [])

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <p>Temperature: {weather?.main?.temp}</p>
      </Card.Body>
    </Card>
  )
}

export default ResultsSearch

  // const myFetchForecast = async() => {
  //   const resp = await fetch(myUrlForecast)
  //   const data = await resp.json()
  //   setForecast(data.list)
  // }

  // useEffect(() => {
  //   myFetchForecast()
  // }, [])

 // const [forecast, setForecast] = useState()
  // const myUrlForecast = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a829039625b8c3a5900bfd0863a4c234&units=metric'