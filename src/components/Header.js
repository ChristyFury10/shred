import React from 'react'
import headerImage from "../images/header-logo.jpg";
import "./Header.css"

const Header = () => {
  return (
    <div className='header-main'>
      <img className = "logo-img" src = {headerImage} alt="shredtown-logo"></img>
    </div>
  )
}

export default Header
