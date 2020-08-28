import React from "react"
import '../styles/projects.css';
import Thumbnail from './Thumbnail.js';
 
function Projects(props) {
  return (
    <div className="projects">
      <h1>Projects Component</h1>
      <div className="thumbnailContainer">
      <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
            <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
            <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
            <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
            <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
            <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
            <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
            <Thumbnail
        link="/ThreeJS"
        image="ig"
        title="Three JS"
        category="AR/VR/XR"
      />
      </div>
    </div>
  )
}
 
export default Projects;