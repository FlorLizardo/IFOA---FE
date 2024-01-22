import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import AlertError from "./AlertError";

const Previsioni = ({ weather }) => {
	const [forecast, setForecast] = useState([]); //solo i dati delle date e le temperature
	const [datiTotali, setDatiTotali] = useState([]); //tutti i dati della fetch
	const [error, setError] = useState(false);

	//fetch dati per la previsione del tempo
	const myFetchForecast = async () => {
		try {
			const resp = await fetch(
				`http://api.openweathermap.org/data/2.5/forecast?id=${weather.id}&appid=a829039625b8c3a5900bfd0863a4c234&units=metric&lang=it`
			);
			const data = await resp.json(); //ricevo i dati della fetch
			setDatiTotali(data.list); //assegno i dati a datiTotali
			dataList(data); //chiamo dataList
			setError(false); //gestione errori a false
		} catch (error) {
			console.error("Errore:", error);
			setError(true); // se c'è un errore 'error' diventa true
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
					tempMax: -Infinity, //inizializzo l'array con un numero molto basso per poi poter comparare quando uso Math.max
					tempMin: Infinity, //inizializzo l'array con un numero molto alto per poi comparare quando uso Math.min
				};
			}

			dailyTemp[date].temperatures.push(el.main.temp);
      dailyTemp[date].tempMax = Math.max(dailyTemp[date].tempMax, el.main.temp_max); //uso Math.max per estrarre il numero più alto tra i due comparati: quello che esiste in tempMax e quello che arriva dall'api
      dailyTemp[date].tempMin = Math.min(dailyTemp[date].tempMin, el.main.temp_min);//uso Math.min per estrarre il numero più basso tra i due comparati: quello che esiste in tempMin e quello che arriva dall'api
		});

		const result = Object.values(dailyTemp).map(({ date, tempMax, tempMin }) => ({ //uso Object per trasformare le values in array e poi fare il map su ognuno
			date,
			tempMax,
      tempMin
		}));

		setForecast(result);
	};

	//funzione per formattare la data ricevuta. Si usa lo split per dividere i dati tramite i trattini
	const formatedDate = (dateApi) => {
		const [year, month, day] = dateApi.split("-");
		return `${day}-${month}`;
	};

	useEffect(() => {
		//se weather.id esiste sara chiamata la fetch (solo al cambiamento dello stato di weather)
		if (weather.id) {
			myFetchForecast();
		}
	}, [weather]);

	useEffect(() => {
		graficoWeather();
	}, [forecast]);

	//grafico
	const graficoWeather = () => {
		const labels = forecast?.slice(1).map((item) => item.date); //date dei diversi giorni
		const tempMax = forecast?.map((item) => item.tempMax);//temperatura massima
    const tempMin = forecast?.map((item) => item.tempMin);//temperatura minima
		const ctx = document.getElementById("myChart").getContext("2d");//canvas per il grafico

		// Distruggere il grafico previo s'è esiste già
		if (ctx.chart) {
			ctx.chart.destroy();
		}

		//creazione di un nuovo grafico
		const myChart = new Chart(ctx, {
			type: "line",
			data: {
				labels: labels, //le diverse date
				datasets: [
					//caratteristiche delle linea del grafico. 2 ogg per creare le due linee
					{
						label: "Temp. Massima (°C)",
						data: tempMax,
						borderColor: "#1983e2",
						// backgroundColor: "#9687b6",
						borderWidth: 2,
						fill: true,
					},
          {
						label: "Temp. Minima (°C)",
						data: tempMin,
						borderColor: "#E28D19",
						// backgroundColor: "#F0C78E",
						borderWidth: 2,
						fill: true,
					},
				],
			},
			options: {
				scales: {
					x: {
						//caratt. dell'ase x
						grid: {
							color: "#84878a",
						},
						ticks: {
							color: "#00000",
						},
					},
					y: {
						//caratt. dell'ase y
						grid: {
							color: "#84878a"
						},
            ticks: {
              stepSize: 1,
            }
					},
				},
			},
		});

		// salvare il nuovo grafico sulla variabile ctx
		ctx.chart = myChart;
	};

	return (
		<Col
			xs="12"
			md="8"
			className="my-5 m-auto"
			style={{ backgroundColor: "rgba(71, 156,161, 0.4)" }}
		>
			{error && <AlertError />}
			<div>
				<h4 className="text-center p-3">Previsioni a 5 giorni</h4>
			</div>
			<div>
				<canvas id="myChart" className="pb-3"></canvas>
			</div>
		</Col>
	);
};

export default Previsioni;
