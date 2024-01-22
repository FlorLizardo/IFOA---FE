import { Col } from 'react-bootstrap'
import sunCard from '../assets/sunCard.png'
import cloudCard from '../assets/cloudCard.png'
import snowCard from '../assets/snowCard.png'
import rainCard from '../assets/rainCard.png'

const CardCity = ({weather}) => {
  const styles = {
    colonna: {
      backgroundColor: "rgba(71, 156,161, 0.4)"
    }
  }

  //switch per i diversi stati del tempo: assegno un'immagine d'accordo a com'è il tempo: pioggia, neve, ecc
  const statoTempo = weather?.weather?.[0]?.main;
  let image;
  switch(statoTempo) {
    case 'Clear':
      image = sunCard;
      break;
    case 'Rain':
      image = rainCard;
      break;
    case 'Snow':
      image = snowCard;
      break;
    case 'Clouds':
      image = cloudCard;
      break;
    default:
      image = ''
  }

  return (
    <Col xs="12" md="6" className="d-flex justify-content-center justify-content-md-end mb-4">
				<div
					className="p-3 px-4 d-flex flex-column rounded rounded-3 justify-content-center align-items-center cardCity"
					style={styles.colonna}
				>
          <div className='d-flex flex-row align-items-center justify-content-center gap-3'>
					<h1 className="h4 fw-medium">{weather?.name}</h1>
          <img src={image} alt='icona del tempo' className='w-25'></img>
          </div>
					<div className="d-flex flex-row align-items-center mt-md-3">
					<i className="bi bi-thermometer-half fs-1"></i>
						<h2 className="display-1 ps-2 py-2">{weather?.main?.temp.toFixed(1)} °C</h2>
					</div>
					<h3 className="h5 ps-2 pt-md-5">
						TP: {weather?.main?.feels_like.toFixed(1)} °C
					</h3>
					<p className="mt-3">
						<span>
						{weather?.main?.temp_max.toFixed(1)} °C / {weather?.main?.temp_min.toFixed(1)} °C
						</span>
					</p>
				</div>
			</Col>
  )
}

export default CardCity