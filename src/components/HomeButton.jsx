import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
function HomeButton() {
  return (

    <Link to={`/`}><FaHome className='home_button'/></Link>
  )
}

export default HomeButton