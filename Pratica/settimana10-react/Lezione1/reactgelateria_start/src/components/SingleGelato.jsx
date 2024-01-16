import { Component } from "react";

class SingleGelato extends Component {
	render() {
		return (
			<div className="gelato">
				<div className="img-container">
					<img src={this.props.img} alt={this.props.nome} className="img" />
				</div>
				<div className="prd-info"> 
					<h4>{this.props.nome}</h4>
          <h5>{this.props.categoria}</h5>
          <span>{(this.props.prezzo / 100).toFixed(2)}€</span>
          <p>{this.props.descrizione}</p>
				</div>
			</div>
		);
	}
}

export default SingleGelato;
