import { useState } from "react"

const MySingleMovie = ({movie}) => {
  const [hover, setHover] = useState(false)

  const styles = {
    div: {
      width: '14rem',
      height: '18rem',
     
    },
    hover: {
      transform: hover ? 'scale(1.2)' : 'scale(1)',
      cursor: 'pointer'
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: '0.4s ease'
    }
  }
  return (

        <img src={movie.Poster} alt={movie.Title} style={{...styles.img, ...styles.hover}} onMouseEnter={() => setHover(true)} onMouseLeave={()=>setHover(false)} />
    
  )
}

export default MySingleMovie