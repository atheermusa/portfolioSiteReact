import React from "react"
import '../styles/about.css';
 
function About(props) {
  return (
    <div id="about-container" className="animated animatedFadeInUp fadeInUp">
       <h2 className="aboutTitle">About Me</h2>
        <p className= "aboutProfile">Whether it’s building Augmented reality projects, coding away at a hackathon or hosting a weekly radio show about it,
        my life always finds itself revolving around technology! One thing I enjoy doing most is diving in headfirst and taking on new challenges, learning new skills ranging from iOS development and Unity and now web development in the form of HTML, CSS and Javascript!</p>
      <div id="about-skills">
          <h3 className="about-subtitle">Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>React.js</li>
              <li>React-Redux</li>
              <li>ThreeJS</li>
              <li>Python</li>
              <li>Swift (with ARKit)</li>
              <li>Unity</li>
              <li>Blender</li>
          </ul>
        </div>
        <div id="about-experience">
          <h3 className="about-subtitle">Experience</h3>
            <ul>
              <li>KCL Electronic Engineering with Management Grad</li>
              <li>Trainee Full-Stack Dev @ FutureProof</li>
            </ul>
        </div>
      </div>
  )
}
 
export default About;