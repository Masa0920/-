import React from 'react'
import "../static/css/subjectbutton.css"

export const SubjectButton = (props) => {
   return (
      <div className="subjectbutton">
         {props.subject}
      </div>
   )
}


export default SubjectButton