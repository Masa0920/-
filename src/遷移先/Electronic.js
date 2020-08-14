import React from 'react'
import electronic from "../static/images/electronic20.JPG"
import TestImg from '../components/TestImg'

export const Electronic = () => {
   return (
      <div className="testcard" >
         <h3>2020 期末</h3>
         <TestImg img={electronic} />
      </div>
   )
}


export default Electronic