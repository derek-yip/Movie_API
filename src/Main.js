import React from 'react'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import SearchResult from './pages/SearchResult'
import TelevisionDetail from './pages/TelevisionDetail'

function Main() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Movie_API/" element={<Home/>}/>
          <Route path="/movie_detail/:id" element={<MovieDetail/>}/>
          <Route path="/tv_detail/:id" element={<TelevisionDetail/>}/>
          <Route path="/search_results/:search" element={<SearchResult/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default Main