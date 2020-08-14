import React from 'react'
import TestImg from '../components/TestImg'
import E1 from "../static/images/ecircle1.JPG"
import E2 from "../static/images/ecircle2.JPG"
import E3 from "../static/images/ecircle3.JPG"

export const ECircle = () => {
   return (
      <div className="testcard" >
         <h3>2020 期末</h3>
         <div className="testimg" >
            <TestImg img={E1} />
            <TestImg img={E2} />
            <TestImg img={E3} />
         </div>
      </div>
   )
}


export default ECircle