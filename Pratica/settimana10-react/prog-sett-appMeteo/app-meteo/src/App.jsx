import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResultsSearch from './components/ResultsSearch'
import Header from './components/Header'
import { useEffect, useState } from 'react'

function App() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/results/:city' element={<ResultsSearch />} /> */}
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
