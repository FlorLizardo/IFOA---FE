import { Component } from "react";
import SingleGelato from "./components/SingleGelato";
import Menu from "./components/Menu";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

class App extends Component {
	// state = {
	// 	gelati: [],
	// };

	// componentDidMount = async () => {
	// 	try {
	// 		const resp = await fetch(url);
	// 		if (resp.ok) {
	// 			const data = await resp.json();
	// 			this.setState({ gelati: data.data });
	// 		} else {
	// 			console.log("Error");
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	render() {
		return (
			<>
      <div className="section-center ">
      <h1 className="title">Gelateria Freddo</h1>
      <Menu />
				{/* <div className="vetrina">
					{this.state.gelati.map((gelato) => (
						<SingleGelato
							key={gelato.id}
							nome={gelato.nome}
							img={gelato.img}
							categoria={gelato.categoria}
							prezzo={gelato.prezzo}
							descrizione={gelato.descrizione}
						/>
					))}
        </div> */}
        </div>
			</>
		);
	}
}

export default App;
