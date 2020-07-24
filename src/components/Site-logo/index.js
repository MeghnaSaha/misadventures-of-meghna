import React from 'react'
import {Link} from 'gatsby'
import './style.css'

/**
* @author
* @function SiteLogo
**/

const SiteLogo = (props) => {
  return(
    <div className="logo">
      <Link className='text' to="/">Misadventures of Meghna</Link> 
    </div>
   )

 }

export default SiteLogo