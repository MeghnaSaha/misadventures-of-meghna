import React, {useState} from 'react'
import './style.css'
import {Link} from 'gatsby'

/**
* @author
* @function NavBar
**/

const NavBar = (props) => {

  return(
    <div className="navbar">
        <ul className="menu">
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/posts">Posts</Link> </li>
            <li><Link to="/contact">Contact Me</Link> </li>
        </ul>
        <div className="search">
          <Link to='/search'>
           <img className='searchIcon' src={require('../../images/icons/search.png')} alt='search' />
          </Link>
        </div>
    </div>
   )

 }

export default NavBar