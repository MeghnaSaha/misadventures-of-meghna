import React from 'react'
import SiteLogo from '../Site-logo'
import NavBar from '../Navbar'
import './style.css'

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div className="Hero">
        <SiteLogo />
        <NavBar />
    </div>
   )

 }

export default Hero