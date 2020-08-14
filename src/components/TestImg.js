import React from 'react'

export const TestImg = (props) => {
   return (
      <div>
         <a href={props.img} target="_blank">
            <img style={{
               width:100,
               border: "solid 1px silver",
               margin: "5px",
            }} src={props.img} />
         </a>
      </div>
   )
}


export default TestImg