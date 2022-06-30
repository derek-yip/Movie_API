import React from 'react'
import SearchBar from './SearchBar'
import SearchButton from './SearchButton'

function SearchHeader() {
  return (
    <div>
      <div className='search_inner center_center'>
            <SearchBar/>
            <SearchButton/>
      </div>
    </div>
  )
}

export default SearchHeader