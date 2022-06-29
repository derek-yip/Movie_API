import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

function Main() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie_detail/:id" element={<MovieDetail/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default Main