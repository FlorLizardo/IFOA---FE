import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  //stabilisco delle routes per le eventuali pagine
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
