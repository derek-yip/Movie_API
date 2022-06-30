import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
function BackButton() {
  return (

    <Link to={`/`}><FaHome className='back_button'/></Link>
  )
}

export default BackButton