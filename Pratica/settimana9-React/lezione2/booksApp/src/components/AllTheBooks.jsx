import { useEffect, useState } from 'react'

import ButtonsBooks from './ButtonsBooks'
import SingleBook from './SingleBook'
import InputSearch from './inputSearch'


const AllTheBooks = () => {
  
  const [books, setBooks] = useState([])
  const [booksFiltered, setBooksFiltered] = useState([])

  const categories = ['Fantasy', 'History', 'Horror', 'Romance', 'Scifi']

  const handleSearch = (event) => {
    let value = new RegExp(event.target.value, 'i')
    const state = books
    const result = state.filter((book) => {
      return value.test(book.title)
    })
    setBooksFiltered(result)
  }

  useEffect(() => {
    setBooksFiltered(books)
  }, [books])

  return(
    <>
    <InputSearch handleSearch={handleSearch}/>
    <ButtonsBooks categories={categories} setBooks={setBooks}  />
    <div className='d-flex flex-wrap justify-content-around gap-3'>
      {booksFiltered.map((book) => 
        <SingleBook book={book} key={book.asin}/>
      )}
    </div>
    </>
  )
}

export default AllTheBooks