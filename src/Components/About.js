import React from "react"
import '../styles/about.css';
 
function About(props) {
  return (
    <div className="about">
       <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <br />
      <div id="skills-experience">
      <div>
        <h3>Skills</h3>
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
    </div>
    <div>
          <h3>Experience</h3>
          <ul>
            <li>KCL Electronic Engineering with Management Grad</li>
            <li>Trainee Full-Stack Dev @ FutureProof</li>
          </ul>
        </div>
      </div>
  )
}
 
export default About;