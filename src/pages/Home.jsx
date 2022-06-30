import React from 'react'
import "../global/index.scss"
import SearchHeader from '../components/SearchHeader'
import Popular from '../components/Popular'
function Home() {
  return (
    <div className="mainpage_cover">
          <SearchHeader/>
          <Popular/>
    
    </div>
  )
}

export default Home