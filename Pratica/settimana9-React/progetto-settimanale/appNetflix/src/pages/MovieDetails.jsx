import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const params = useParams()

  const fetchDataMovie = async () => {
    const resp = await fetch (`http://www.omdbapi.com/?i=${params.movieId}&apikey=87f504eb` )
    const dataMovie = await resp.json()
    setMovie(dataMovie)
  }

  useEffect(() => {
    fetchDataMovie()
  }, [])

  return (
    <>
    {movie?.imdbID &&
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          <span>{movie.Year} - {movie.Type}</span>
        </Card.Text>
        <Button variant="primary">Like</Button>
      </Card.Body>
    </Card>
    
    }
    </>
  )
}

export default MovieDetails