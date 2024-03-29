import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isErrorActions } from "../actions/alertErrorActions";
import Grafico from "./Grafico";
import CardsPrevisioni from "./cardsPrevisioni";
import CardHour from "./CardHour";

const Previsioni = () => {
	const [forecast, setForecast] = useState([]); //solo i dati delle date e le temperature
	const [datiTotali, setDatiTotali] = useState([]); //tutti i dati della fetch
	const weatherData = useSelector((state) => state.fetchWeather);
	const dispatch = useDispatch();

	//fetch dati per la previsione del tempo
	const myFetchForecast = async () => {
		try {
			const resp = await fetch(
				`http://api.openweathermap.org/data/2.5/forecast?id=${weatherData.fetchWeather.id}&appid=a829039625b8c3a5900bfd0863a4c234&units=metric&lang=it`
			);
			const data = await resp.json(); //ricevo i dati della fetch
			setDatiTotali(data.list); //assegno i dati a datiTotali
			dataList(data); //chiamo dataList
			dispatch(isErrorActions(false));
		} catch (error) {
			console.error("Errore:", error);
			dispatch(isErrorActions(true));
		}
	};

	//funzione per selezionare solo i giorni
	const dataList = (data) => {
		const dailyTemp = [];

		//per ogni elemento dentro a data.list si fa un forEach per prendere le date, si fa lo split per dividire la stringa in un array e poi si prende solo il primo di questi, che è quello che contiene la data. Se la data non esiste ancora, si aggiunge al ogg dailyTemp
		data.list.forEach((el) => {
			const dateApi = el.dt_txt.split(" ")[0];
			const date = formatedDate(dateApi);

			if (!dailyTemp[date]) {
				dailyTemp[date] = {
					date,
					temperatures: [],
					tempMax: -Infinity, //inizializzo l'array con un numero molto basso per poi comparare quando uso Math.max
					tempMin: Infinity, //inizializzo l'array con un numero molto alto per poi comparare quando uso Math.min
				};
			}

			dailyTemp[date].temperatures.push(el.main.temp);
			dailyTemp[date].tempMax = Math.max(
				dailyTemp[date].tempMax,
				el.main.temp_max
			); //uso Math.max per estrarre il numero più alto tra i due comparati: quello che esiste in tempMax e quello che arriva dall'api
			dailyTemp[date].tempMin = Math.min(
				dailyTemp[date].tempMin,
				el.main.temp_min
			); //uso Math.min per estrarre il numero più basso tra i due comparati: quello che esiste in tempMin e quello che arriva dall'api
		});

		const result = Object.values(dailyTemp).map(({ date, tempMax, tempMin }) => ({
			//uso Object per trasformare le values in array e poi fare il map su ognuno
			date,
			tempMax,
			tempMin,
		}));

		setForecast(result);
	};

	//funzione per formattare la data ricevuta. Si usa lo split per dividere i dati tramite i trattini
	const formatedDate = (dateApi) => {
		const [year, month, day] = dateApi.split("-");
		return `${day}-${month}`;
	};

	useEffect(() => {
		//se weather.id esiste sarà chiamata la fetch (solo al cambiamento dello stato di weatherData)
		if (weatherData.fetchWeather.id) {
			myFetchForecast();
		}
	}, [weatherData]);

	const styles = {
		colStyle: {
			backgroundColor: "rgba(71, 156,161, 0.4)"
		},
		divGrafico: {
			height: '84%'
		}
	}

	return (
		<>
		<Col xs="12"
			md="10"
			className="my-5 m-auto rounded rounded-3 px-5 py-4"
			style={styles.colStyle}>
				<h4 className="pb-3">Il tempo nelle prossime ore</h4>
				<CardHour datiTotali={datiTotali} />
		</Col>
		<Col
			xs="12"
			md="8"
			className="my-5 m-auto rounded rounded-3 colContainer"
			style={styles.colStyle}
		>
			<div>
				<h4 className="text-center p-3">Previsioni a 5 giorni</h4>
			</div>
			<div className="w-100 divContainer d-none d-md-block" style={styles.divGrafico}>
			<Grafico forecast={forecast} />
			</div>
			<div className="d-block d-md-none">
				<CardsPrevisioni forecast={forecast} />
			</div>	
		</Col>
		</>
	);
};

export default Previsioni;
