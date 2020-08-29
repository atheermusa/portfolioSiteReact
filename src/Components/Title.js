import React from "react"
import '../styles/title.css';
 
function Title(props) {
  return (
    <div className="title">
      {/* <div className ="titleName">
        <h1>Atheer Musa</h1>
      </div> */}
      <div className="titleDescription animated animatedFadeInUp fadeInUp">
        <p className="titleOneline">Electronic Engineering with Management Graduate from Kings College London. Currently learning Full-Stack Web Development @futureproof.</p>
      </div>
    </div>
  )
}
 
export default Title;