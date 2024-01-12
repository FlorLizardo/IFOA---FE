import { Col, Row } from "react-bootstrap"
import MySingleGallery from "./MySingleGallery"
import { useState, useEffect } from "react"

const Gallery = ({saga}) => {
  const [movies, setMovies] = useState([])
  // const saga = ['Harry Potter', 'Stars Wars', 'Alien']

  const myFetch = async () => {
    try{
      const resp = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=87f504eb&s=' + saga)
      if(resp.ok) {
        let data = await resp.json()
        setMovies(data.Search)
      }else {
        console.log('error');
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    myFetch()
  }, [])

  return(
    <Row className="px-3">
      <h3 className="text-white pt-5 pb-2 h4">{saga}</h3>
     <Col className="d-flex gap-2">
     {movies.slice(0, 6).map((movie) => 
      <MySingleGallery movie={movie} key={movie.imdbID}/>
     )}
     </Col>
    </Row>
  )
}

export default Gallery