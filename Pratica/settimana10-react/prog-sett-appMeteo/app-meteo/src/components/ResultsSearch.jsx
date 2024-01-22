import CardCity from "./CardCity";
import CardsWeather from "./CardsWeather";
import Previsioni from "./Previsioni";

const ResultsSearch = ({ weather }) => {
	return (
		<>
		<CardCity weather={weather} />
		<CardsWeather weather={weather} />
		<Previsioni weather={weather} />
		</>
	);
};

export default ResultsSearch;
