import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavNetflix from './components/organismo/NavNetflix'
import FooterNetflix from './components/organismo/FooterNetflix'
import HomePage from './pages/HomePage'
import TvShows from './pages/TvShows'
import NotFound from './components/organismo/NotFound';
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavNetflix />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/tvShows' element={<TvShows />}/>
          <Route path='/results' element={<SearchResults />}/>
          <Route path='/movieDetails/:movieId' element={<MovieDetails />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <FooterNetflix />
      </BrowserRouter>
      
    </>
  )
}


export default App
