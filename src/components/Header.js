import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/login">Login</Link>
      <br/>
      I am Header.
    </div>
  )
}

export default Header