import React from 'react'
import {MdOutlineManageSearch} from 'react-icons/md'
import {Link} from "react-router-dom";

function SearchButton(props) {

  return (
    <div>
      <Link  style={{textDecoration:'none'}} to={`/search_results/${props.search}`}>
        <button className='search_button' ><MdOutlineManageSearch className='Search_icon'/></button>
     </Link>
     </div>
  )
  
}
export default SearchButton