import { Component } from "react";
import SingleGelato from "./SingleGelato";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";
class Menu extends Component {
  state = {
		gelati: [],
    isLoading: false,
    isError: false,
    filteredProducts: [],
    selected: 0,
    categories: []
	};

  filtraProdotti = (category, index) => {
    this.setState({selected: index})

    if(category === 'Tutti') {
      this.setState({filteredProducts: this.state.gelati})
    }else {
      const prodottiFiltrati = this.state.gelati.filter((el) => el.categoria === category ? el : '')
      this.setState({filteredProducts: prodottiFiltrati})
    }
  }
  componentDidMount = async () => {
    this.setState({isLoading: true})
    this.setState({isError: false})
		try {
			const resp = await fetch(url);
			if (resp.ok) {
				const data = await resp.json();
				this.setState({ gelati: data.data });
        this.setState({filteredProducts: data.data})

        const categories = Array.from(
          new Set(data.data.map((prod) => prod.categoria))
        )
        categories.unshift('Tutti');
        this.setState({categories: categories})

        this.setState({isLoading: false})
			} else {
				console.log("Error");
        this.setState({isError: true})
			}
		} catch (err) {
			console.log(err);
      this.setState({isError: true})
      this.setState({isLoading: false})
		}
	};

  render(){
    return(
      <div className="container">
      {!this.state.isLoading && !this.state.isError ? (
        <>
        <div className="lista-categorie">
          {this.state.categories.map((category, index) => 
            <button className='btn btn-selector' key={index} onClick={() => this.filtraProdotti(category, index)}>{category}</button>
          )}
        </div>
        <div className="vetrina">
        {this.state.filteredProducts.map((gelato) => (
						<SingleGelato
							key={gelato.id}
							nome={gelato.nome}
							img={gelato.img}
							categoria={gelato.categoria}
							prezzo={gelato.prezzo}
							descrizione={gelato.descrizione}
						/>
					))}
        </div>
        </>
      ) : !this.state.isLoading && this.state.isError ? (
        <h4>Qualcosa è andata male, riprova più tardi 😣</h4>
      ): (
        <h4>Caricando...</h4>
      )
      }
      
    </div>
      ) 
  }
    
  
}

export default Menu