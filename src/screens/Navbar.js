import React from 'react'
import "../static/css/navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <div className="navbar">
         <h3>情エレ過去問</h3>
            <Link to='/'>
               <div className="home" >
                  <h3>ホームへ</h3>
               </div>
            </Link>
         <h4>写真大きくなります</h4>
      </div>
   )
}


export default Navbar