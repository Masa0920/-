import React from 'react'
import "../static/css/topcontainer.css"
import SubjectButton from '../components/SubjectButton'
import { Link } from 'react-router-dom'

export const TopContainer = () => {
   return (
      <div className="topcontainer">
         <Link to='/OMath1'><SubjectButton subject="応用数学１" /></Link>
         {/* <Link to="/" ><SubjectButton subject="応用数学演習１" /></Link> */}
         <Link to="/OMath2" ><SubjectButton subject="応用数学２" /></Link>
         {/* <Link to="/" ><SubjectButton subject="応用数学演習２" /></Link> */}
         {/* <Link to="/" ><SubjectButton subject="計算機プログラミング" /></Link> */}
         <Link to="/ECircle" ><SubjectButton subject="電気回路" /></Link>
         <Link to="/Info" ><SubjectButton subject="情報理論" /></Link>
         <Link to="/Electronic" ><SubjectButton subject="電子デバイス" /></Link>
      </div>
   )
}


export default TopContainer