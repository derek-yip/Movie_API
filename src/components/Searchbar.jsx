import React from 'react'
import {useState,useEffect} from 'react'

function SearchBar() {
  const [Search,setSearch]=useState([]) 
  console.log(Search);
   
  return (
    <div className='search_bar'>
      <input type="text" onChange={e=>setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar