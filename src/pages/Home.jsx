import React from 'react'
import '../css/Movie.scss'
import SearchHeader from '../components/SearchHeader'
import Popular from '../components/sliders/Popular'
import TelevsionShow from '../components/sliders/TelevisionShow'

function Home() {
  
  return (
    <div className="mainpage_cover">
          {/* <HoverChangeImage/> */}
          <SearchHeader/>
          <Popular/>
          <TelevsionShow/>
    </div>
  )
}

export default Home