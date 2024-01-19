import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ResultsSearch = () => {
	const [weather, setWeather] = useState({});
	const lat = useParams();

	const myFetchWeather = async () => {
		const resp = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat.lat}&lon=${lat.lon}&appid=a829039625b8c3a5900bfd0863a4c234&units=metric&lang=it`
		);
		const data = await resp.json();
		setWeather(data);
		console.log(data);
	};

	useEffect(() => {
		myFetchWeather();
	}, []);

  const styles = {
    container: {
      marginTop: "4rem",
    }
  }

	return (
		<Container style={styles.container}>
			<Row>
				<Col xs="12" md="6">
					<div className="p-3 px-4 border border-secondary" style={{ width: "30rem", height: '20rem', marginLeft: "4rem" }}>
						
            <h1 className="display-2 fw-medium">{weather?.name}</h1>
              <h2 className="h1 ps-2 py-2">{weather?.main?.temp.toFixed(1)} °C</h2>
              <h3 className="h5 ps-2 pt-2">TP: {weather?.main?.feels_like.toFixed(1)} °C</h3>
              <p className="mt-5">
              <span  >Min: {weather?.main?.temp_min.toFixed(1)} °C - Max: {weather?.main?.temp_max.toFixed(1)} °C</span>

              </p>
						
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ResultsSearch;

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
