import {Card, Button} from 'react-bootstrap'

import { useState } from 'react'
import ButtonsBooks from './ButtonsBooks'

const AllTheBooks = () => {
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

  const [books, setBooks] = useState([])

  return(
    <>
    <ButtonsBooks setBooks={setBooks} />
    <div className='d-flex flex-wrap justify-content-around gap-3'>
      {books.map((book) => 
      <Card style={customStyles.cardContainer} key={book.asin}>
      <Card.Img variant="top" src={book.img} alt='copertina del libro' style={customStyles.imgCard} />
      <Card.Body>
        <Card.Title className='text-truncate'>{book.title}</Card.Title>
        <Card.Text>
          {`${book.price} € - ${book.category}`}
        </Card.Text>
        <Button variant="primary">Acquista</Button>
      </Card.Body>
    </Card>
      )}
    </div>
    </>
  )
}

export default AllTheBooks