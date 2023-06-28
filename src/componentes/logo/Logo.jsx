import React from 'react'
import { Link } from 'react-router-dom'
import "./logo.css"

const Logo = () => {
  return (
    <Link to="/"> <h1 className='logo'>HOME.</h1> </Link>
  )
}

export default Logo