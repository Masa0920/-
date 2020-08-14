import React from 'react'
import info201 from "../static/images/info201.JPG"
import info202 from "../static/images/info202.JPG"
import info191 from "../static/images/info191.JPG"
import info192 from "../static/images/info192.JPG"
import info181 from "../static/images/info181.JPG"
import info182 from "../static/images/info182.JPG"
import TestImg from '../components/TestImg'
import "../static/css/testcard.css"

export const Info = () => {
   return (
      <div style={{display: "flex", flexWrap: "wrap",}} >
         <div className="testcard" >
            <h3>2020 期末</h3>
            <div className="testimg" >
               <TestImg img={info201} />
               <TestImg img={info202} />
            </div>
         </div>
         <div className="testcard" >
            <h3>2019 期末</h3>
            <div className="testimg" >
               <TestImg img={info191} />
               <TestImg img={info192} />
            </div>
         </div>
         <div className="testcard" >
            <h3>2018 期末</h3>
            <div className="testimg" >
               <TestImg img={info181} />
               <TestImg img={info182} />
            </div>
         </div>
      </div>
   )
}


export default Info