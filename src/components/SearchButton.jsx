import React from 'react'
import {MdOutlineManageSearch} from 'react-icons/md'

function SearchButton() {
  const SearchKeyword=()=>{
    console.log("HI");
  };
  return (
    <div>
        <button className='search_button center_bottom' onClick={SearchKeyword}><MdOutlineManageSearch className='Search_icon'/></button>
    </div>
  )
  
}
export default SearchButton