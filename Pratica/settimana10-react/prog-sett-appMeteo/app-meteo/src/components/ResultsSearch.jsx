import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Chart from "chart.js/auto";

const ResultsSearch = ({ weather }) => {
	
	const [forecast, setForecast] = useState([]);
	const [datiTotali, setDatiTotali] = useState([]);

const myFetchForecast = async () => {
  try {
    const resp = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${weather.id}&appid=a829039625b8c3a5900bfd0863a4c234&units=metric&lang=it`
    );
    const data = await resp.json();

    const dailyTemp = {};
    
    data.list.forEach((el) => {
      const dateApi = el.dt_txt.split(' ')[0];
			const date = formatedDate(dateApi)
      const tempMax = el.main.temp_max;
      const tempMin = el.main.temp_min;

      if (!dailyTemp[date]) {
        dailyTemp[date] = { tempMax, tempMin };
      } else {
        dailyTemp[date].tempMax = Math.max(dailyTemp[date].tempMax, tempMax);
        dailyTemp[date].tempMin = Math.min(dailyTemp[date].tempMin, tempMin);
      }
    });

    const resultado = Object.keys(dailyTemp).map((date) => ({
      date,
      tempMax: dailyTemp[date].tempMax.toFixed(1),
      tempMin: dailyTemp[date].tempMin.toFixed(1)
    }));

    setForecast(resultado);
		setDatiTotali(data);
  } catch (error) {
    console.error('Errore:', error);
  }
};

const formatedDate = (dateApi) => {
  const [year, month, day] = dateApi.split('-');
  return `${day}-${month}`;
};

useEffect(() => {
  if (weather.id) {
    myFetchForecast();
  }
}, [weather]);
	return (
		<>
			<Col xs="12" md="6" className="d-flex justify-content-center mb-4">
				<div
					className="p-3 px-4 border border-2-secondary d-flex flex-column rounded rounded-3 justify-content-center"
					style={{ width: "80%", height: "27rem", backgroundColor: 'rgba(225, 225, 225, 0.3)'}}
				>
					<h1 className="display-2 fw-medium">{weather?.name}</h1>
					<h2 className="h1 ps-2 py-2">{weather?.main?.temp.toFixed(1)} °C</h2>
					<h3 className="h5 ps-2 pt-2">
						TP: {weather?.main?.feels_like.toFixed(1)} °C
					</h3>
					<p className="mt-5">
						<span>
							Min: {weather?.main?.temp_min.toFixed(1)} °C - Mass: {weather?.main?.temp_max.toFixed(1)} °C
						</span>
					</p>
				</div>
			</Col>
			<Col
				xs="12"
				md="6"
				className="d-flex align-items-center justify-content-center justify-content-md-start ps-md-5 flex-wrap gap-4"
			>
				<Card
					className=" p-2 border border-2-secondary rounded rounded-3"
					style={{ width: "36%", height: "8rem", backgroundColor: 'rgba(225, 225, 225, 0.2)' }}
				>
					<h3>Cielo: </h3>
					<p>{weather?.weather?.[0]?.description}</p>
				</Card>
				<Card
					className=" p-2 bg-transparent border border-2-secondary rounded rounded-3"
					style={{ width: "36%", height: "8rem" }}
				>
					<h3>Nuvole: </h3>
					<p>{weather?.clouds?.all}%</p>
				</Card>
				<Card
					className="p-2 bg-transparent border border-2-secondary rounded rounded-3"
					style={{ width: "36%", height: "8rem" }}
				>
					<h3>Vento: </h3>
					<p>{weather?.wind?.speed} km/h</p>
				</Card>
				<Card
					className=" p-2 bg-transparent border border-2-secondary rounded rounded-3"
					style={{ width: "36%", height: "8rem" }}
				>
					<h3>Umidità: </h3>
					<p>{weather?.main?.humidity}%</p>
				</Card>
			</Col>
			<Col xs='12' md='10' className="mt-5 m-auto">
				<div className="text-center">
				<h4>Previsioni a 5 giorni</h4>
				</div>
				<div className="d-flex flex-column flex-md-row mt-3 gap-3 mb-5 justify-content-center">
					{forecast?.slice(0,5).map((dato, index) => 
						<Card className="cardGiorno p-2 text-center p-3 px-5 px-md-1 d-flex flex-row flex-md-column justify-content-between" key={index}>
						<h4>{dato?.date}</h4>
						<p>imagine</p>
						<span>{dato?.tempMin} °C - {dato?.tempMax} °C</span>
					</Card>
					)}
				</div>
			</Col>
		</>
	);
};

export default ResultsSearch;
