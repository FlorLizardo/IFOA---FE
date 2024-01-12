import { useState } from "react"
import { Carousel } from "react-bootstrap"

const MySingleGallery = ({movie}) => {
  const [hover, setHover] = useState(false)

  const styles = {
    div: {
      width: '13rem'
    },
    hover: {
      transform: hover ? 'scale(1.1)' : 'scale(1)',
      cursor: 'pointer'
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }
  return (
      <div style={{...styles.div, ...styles.hover}} className="d-flex justify-content-center align-items-center" onMouseEnter={() => setHover(true)} onMouseLeave={()=>setHover(false)}>
        <img src={movie.Poster} alt={movie.Title} style={styles.img} />
      </div>
  )
}

export default MySingleGallery