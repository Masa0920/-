import React from 'react'
import omath118middle from "../static/images/omath118middle.JPG"
import omath119middle from "../static/images/omath119middle.JPG"
import OMath120middle from "../static/images/OMath120middle.JPG"
import omath119end from "../static/images/omath119end.JPG"
import OMath120end from "../static/images/OMath120end.JPG"
import TestImg from '../components/TestImg'
import "../static/css/testcard.css"

export const OMath = () => {
   return (
      <div style={{display: "flex", flexWrap: "wrap",}}>
         <div className="testcard" >
            <h3>2018 中間</h3>
            <div className="testimg" >
               <TestImg img={omath118middle} />
            </div>
         </div>
         <div className="testcard" >
            <h3>2019 中間</h3>
            <div className="testimg" >
               <TestImg img={omath119middle} />
            </div>
         </div>
         <div className="testcard" >
            <h3>2019 期末</h3>
            <div className="testimg" >
               <TestImg img={omath119end} />
            </div>
         </div>
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