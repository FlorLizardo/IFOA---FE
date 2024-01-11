import { Button } from 'react-bootstrap'
import FantasyBooks from '../../json/fantasy.json'
import HistoryBooks from '../../json/history.json'
import HorrorBooks from '../../json/horror.json'
import RomanceBooks from '../../json/romance.json'
import ScifiBooks from '../../json/scifi.json'

const importCategories = async (myCategory) => {
  let dataBooks = [];

  const categoryName = myCategory.toLowerCase()
  const filePath = `../../json/${categoryName}.json`;

  try {
    const module = await import(filePath);
    dataBooks.push(module.default);
  } catch (error) {
    console.log(`Errore nel caricamento del file Json per la categoria ${myCategory}:`, error);
    dataBooks.push([]);
  }
  return dataBooks
};

const ButtonsBooks = ({categories, setBooks}) => {
  // const categories = [
  //   {
  //     nome: 'Fantasy',
  //     data: FantasyBooks
  //   },
  //   {
  //     nome: 'History',
  //     data: HistoryBooks
  //   },
  //   {
  //     nome: 'Horror',
  //     data: HorrorBooks
  //   },
  //   {
  //     nome: 'Romance',
  //     data: RomanceBooks
  //   },
  //   {
  //     nome: 'Scifi',
  //     data: ScifiBooks
  //   }
  // ]

  return (
    <>
    <div className='text-center mb-5'>
      {categories.map((category, index) => (
        <Button variant='outline-success' className='mx-2' onClick={async () => {
          try {
            const data = await importCategories(category);
            setBooks(data[0]);
          } catch (error) {
            console.log('Errore nel caricamento dei dati: ', error);
          }
        }} key={index}>
          {category}</Button>
      )
      )
      }
    </div>
    </>
  )
}


export default ButtonsBooks