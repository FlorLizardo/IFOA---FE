import { useState } from 'react'
import {Card, Button} from 'react-bootstrap'

const SingleBook = ({book}) => {
  const customStyles = {
    cardContainer: {
      width: '18rem'
    },
    imgCard: {
      width: '15rem',
      height: '20rem',
      margin: '0 auto'
    }
  }

  const [selected, setSelected] = useState(false)

 
  return (
    <Card style={{...customStyles.cardContainer, border: selected && '4px solid red'}} key={book.asin}>
      <Card.Img variant="top" src={book.img} alt='copertina del libro' style={customStyles.imgCard} onClick={() => setSelected(!selected)} />
      <Card.Body>
        <Card.Title className='text-truncate'>{book.title}</Card.Title>
        <Card.Text>
          {`${book.price} € - ${book.category}`}
        </Card.Text>
        <Button variant="primary">Acquista</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
