import React, { Component } from 'react'
import '../styles/project.css'

export default class Project extends Component {
    render() {
        return (
            <div id="project-container">
                <h1 id="project-title" className="animated animatedFadeInUp fadeInUp"> {this.props.Title} </h1>
                <p id="project-description" className="animated animatedFadeInUp fadeInUp"> {this.props.Description} </p>
                <h3 id ="project-github" className="animated animatedFadeInUp fadeInUp"> GitHub Repo: <a id="project-github-link" href={this.props.Link} target="none">Click Here</a></h3>
            </div>
        )
    }
}
