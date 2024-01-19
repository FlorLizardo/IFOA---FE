import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResultsSearch from './components/ResultsSearch'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/results/:lat/:lon' element={<ResultsSearch />} />
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
