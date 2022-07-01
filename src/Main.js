import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import SearchResult from './pages/SearchResult'

function Main() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie_detail/:id" element={<MovieDetail/>}/>
          <Route path="/search_results/:search" element={<SearchResult/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default Main