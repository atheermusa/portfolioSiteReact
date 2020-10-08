import React, { Component } from 'react'
import '../styles/project.css'
import ProjectImageContainer from './ProjectImageContainer'

export default class Project extends Component {
    render() {
        return (
            <div id="project-container">
                <h1 id="project-title" className="animated animatedFadeInUp fadeInUp"> {this.props.Title} </h1>
                <div id="project-description" className="animated animatedFadeInUp fadeInUp"> 
                    <p>{this.props.Description}</p>
                    <br></br> 
                    <p>The full description along with all code can be found on the Github repository linked below.</p>
                </div>
                <h3 id ="project-github" className="animated animatedFadeInUp fadeInUp"> GitHub Repo: <a id="project-github-link" href={this.props.Link} target="none">Click Here</a></h3>
                <ProjectImageContainer
                    imgsrc = {this.props.imgsrc}
                    imgdescription = {this.props.imgdescription}
                ></ProjectImageContainer>
            </div>
        )
    }
}
