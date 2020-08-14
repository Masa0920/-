import React from 'react'
import "../static/css/navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <Link to='/'>
         <div className="navbar">
            <h3>ホームへ</h3>
         </div>
      </Link>
   )
}


export default Navbar