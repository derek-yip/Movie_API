import Popular from '../components/Popular'
import Searchbar from '../components/Searchbar'

import React from 'react'
import "../global/index.scss"

function Home() {
  return (
    <div>
          <Searchbar/>
          <Popular/>
    
    </div>
  )
}

export default Home