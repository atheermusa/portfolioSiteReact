import React from "react"
import '../styles/about.css';
 
function About(props) {
  return (
    <div id="about-container" className="animated animatedFadeInUp fadeInUp">
       <h2 className="aboutTitle">About Me</h2>
        <div className= "aboutProfile">
          <p>Initially sparked by the first time I was handed a mobile phone, my passion for technology has led me to some amazing experiences and a few of my fondest memories. From building my first game in the form of an 8-bit Star Wars space-invaders clone (with matching music to boot) to coding and singing Karaoke in a lecture hall while pulling an all-nighter at a hackathon, to creating and hosting a weekly radio show called Tech Tuesday.</p>
          <br></br>
          <p>My many interests in tech, including Full-stack Web Development and AR/VR,  along with my training at futureproof drive and inspire me to always stay curious and keep learning. I’m excited to start my career in technology and can’t wait to build that next big thing.</p>
        </div>
      <div id="about-skills">
          <h3 className="about-subtitle">Skills</h3>
            <ul>
              <li>HTML/CSS/JavaScript</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>React-Redux</li>
              <li>React Native</li>
              <li>MongoDB/Postgres</li>
              <li>Python</li>
              <li>Django/Flask</li>
              <li>ThreeJS</li>
              <li>Swift (with ARKit)</li>
              <li>Unity</li>
              <li>Blender</li>
              <li>C#</li>
          </ul>

        </div>
        <div id="about-experience">
          <h3 className="about-subtitle">Experience</h3>
            <ul>
              <li>KCL Electronic Engineering with Management Grad</li>
              <li>Trainee Full-Stack Dev @ FutureProof</li>
              <li>Junior Software Engineer @ Zego</li>

            </ul>
        </div>
        <div id="about-video">
        <iframe title="Atheer Musa futureproof video" width="560" height="315" src="https://www.youtube.com/embed/MQ-CwXVIpdI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h2 id="about-cv">CV can be found: <a id="about-cv-link" href="https://futureproof-jackson.netlify.app/cv_Atheer_Musa.adffbe7d.pdf" target="none">Here</a> </h2>
      </div>
  )
}
 
export default About;