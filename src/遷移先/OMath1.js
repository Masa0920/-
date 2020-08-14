import React from 'react'
import OMath120middle from "../static/images/OMath120middle.JPG"
import OMath120end from "../static/images/OMath120end.JPG"
import TestImg from '../components/TestImg'
import "../static/css/testcard.css"

export const OMath = () => {
   return (
      <div style={{display: "flex",}}>
         <div className="testcard" >
            <h3>2020 中間</h3>
            <div className="testimg" >
               <TestImg img={OMath120middle} />
            </div>
         </div>
         <div className="testcard" >
            <h3>2020 期末</h3>
            <div className="testimg" >
               <TestImg img={OMath120end} />
            </div>
         </div>
      </div>
   )
}


export default OMath