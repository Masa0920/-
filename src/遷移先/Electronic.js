import React from 'react'
import electronic20 from "../static/images/electronic20end.JPG"
import electronic19 from "../static/images/electronic19end.JPG"
import TestImg from '../components/TestImg'

export const Electronic = () => {
   return (
      <div style={{display: "flex", flexWrap: "wrap",}} >
         <div className="testcard" >
            <h3>2020 期末</h3>
            <TestImg img={electronic20} />
         </div>
         <div className="testcard" >
            <h3>2019 期末</h3>
            <TestImg img={electronic19} />
         </div>
      </div>
   )
}


export default Electronic