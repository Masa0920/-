import React from 'react'
import info201 from "../static/images/info201.JPG"
import info202 from "../static/images/info202.JPG"
import TestImg from '../components/TestImg'
import "../static/css/testcard.css"

export const Info = () => {
   return (
      <div className="testcard" >
         <h3>2020 期末</h3>
         <div className="testimg" >
            <TestImg img={info201} />
            <TestImg img={info202} />
         </div>
      </div>
   )
}


export default Info