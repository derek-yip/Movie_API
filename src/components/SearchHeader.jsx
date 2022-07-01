import React from 'react'
import SearchBar from './SearchBar'

function SearchHeader() {
  return (
    <div className='search_cover column_center_center'>
      <h1>Welcome</h1>
      <div className='search_inner center_center'>
            <SearchBar/>
      </div>
    </div>
  )
}

export default SearchHeader