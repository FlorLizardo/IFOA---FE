import { Button } from 'react-bootstrap'
import FantasyBooks from '../../json/fantasy.json'
import HistoryBooks from '../../json/history.json'
import HorrorBooks from '../../json/horror.json'
import RomanceBooks from '../../json/romance.json'
import ScifiBooks from '../../json/scifi.json'

const ButtonsBooks = ({setBooks}) => {
  const categories = [
    {
      nome: 'Fantasy',
      data: FantasyBooks
    },
    {
      nome: 'History',
      data: HistoryBooks
    },
    {
      nome: 'Horror',
      data: HorrorBooks
    },
    {
      nome: 'Romance',
      data: RomanceBooks
    },
    {
      nome: 'Scifi',
      data: ScifiBooks
    }
  ]

  return (
    <>
    <div className='text-center mb-5'>
      {categories.map((category, index) =>
        <Button variant='outline-success' className='mx-2' onClick={() => setBooks(category.data)} key={index}>{category.nome}</Button>
      )}
    </div>
    </>
  )
}

export default ButtonsBooks