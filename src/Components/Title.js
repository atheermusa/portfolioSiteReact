import React from "react"
import '../styles/title.css';
 
function Title(props) {
  return (
    <div className="title">
      <div className ="titleName">
        <h1>Atheer Musa</h1>
      </div>
      <div className="titleDescription">
        <p>My name's Atheer Musa. I'm a recent Electronic Engineering with Management from Kings College University.</p>
        <p>Whether it’s building Augmented reality projects, coding away at a hackathon or hosting a weekly radio show about it,
        my life always finds itself revolving around technology! One thing I enjoy doing most is diving in headfirst and taking on new challenges, learning new skills ranging from iOS development and Unity and now web development in the form of HTML, CSS and Javascript!</p>
      </div>
    </div>
  )
}
 
export default Title;