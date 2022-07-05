import React from 'react'
import {useState} from 'react'
import SearchButton from './SearchButton'

function SearchBar() {
  const [Search,setSearch]=useState();
  return (
    <div className='search_bar center_center'>
      <input type="text" onChange={e=>setSearch(e.target.value)}/>
      <SearchButton search={Search}/>
    </div>
  )
}

export default SearchBar