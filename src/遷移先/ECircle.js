import React from 'react'
import TestImg from '../components/TestImg'
import E1 from "../static/images/ecircle1.JPG"
import E2 from "../static/images/ecircle2.JPG"
import E3 from "../static/images/ecircle3.JPG"
import Ere1 from "../static/images/ecirclere1.JPG"
import Ere2 from "../static/images/ecirclere2.JPG"

export const ECircle = () => {
   return (
      <div　style={{display: "flex", flexWrap: "wrap"}} >
         <div className="testcard" >
            <h3>2020 期末</h3>
            <div className="testimg" >
               <TestImg img={E1} />
               <TestImg img={E2} />
               <TestImg img={E3} />
            </div>
         </div>
         <div className="testcard" >
            <h3>2020 期末再テスト</h3>
            <div className="testimg" >
               <TestImg img={Ere1} />
               <TestImg img={Ere2} />
            </div>
         </div>
      </div>
   )
}


export default ECircle