import React from "react"
import '../styles/title.css';
 
function Title(props) {
  return (
    <div className="title">
      {/* <div className ="titleName">
        <h1>Atheer Musa</h1>
      </div> */}
      <div className="titleDescription animated animatedFadeInUp fadeInUp">
        <p className="titleOneline">Junior Software Engineer @ Zego.</p>
        <br></br>
        <p className="titleOneline">Graduate Full-Stack Web Developer @futureproof.</p>
      </div>
    </div>
  )
}
 
export default Title;