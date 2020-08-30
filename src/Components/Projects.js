import React, { Component } from "react"
import '../styles/projects.css';
import Thumbnail from './Thumbnail.js';
import Project from './Project';


export default class Projects extends Component {

    state  = {
        currentProject : ""
    };

    componentSelector = value => () => {
        this.componentSetter(value)
    };
    componentSetter = (number) => this.setState({ currentProject : number});

    projectToShow = () => {

        switch (this.state.currentProject) {
            case 1:
                return <Project 
                Title = "Project 1"
                Description = "This is a description for project one"
                />
                ;
                case 2:
                    return <Project 
                    Title = "Project 2"
                    Description = "This is a description for project 2"
                    />
                    ;
                    case 3:
                      return <Project 
                      Title = "Project 3"
                      Description = "This is a description for project 3"
                      />
                      ;
                      case 4:
                        return <Project 
                        Title = "Project 4"
                        Description = "This is a description for project 4"
                        />
                        ;
                        case 5:
                          return <Project 
                          Title = "Project 5"
                          Description = "This is a description for project 5"
                          />
                          ;
                          case 6:
                            return <Project 
                            Title = "Project 6"
                            Description = "This is a description for project 6"
                            />
                            ;                          
            default:
               return  <Project 
               Title = "No Project Selected"
               Description = "Please click a thumbnail to show a project"
               />
                ;
        }   
    }

    render() {

        return (

          <div>
         <div className="projects">
          <h1>Projects Component</h1>
          <div className="thumbnailContainer">
          <div onClick={this.componentSelector(1)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Three JS"
                  category="AR/VR/XR"
                />
                </div>
                <div onClick={this.componentSelector(2)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Three JS"
                  category="AR/VR/XR"
                />
                </div>
                <div onClick={this.componentSelector(3)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Three JS"
                  category="AR/VR/XR"
                />
                </div>
                <div onClick={this.componentSelector(4)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Three JS"
                  category="AR/VR/XR"
                />
                </div>
                <div onClick={this.componentSelector(5)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Three JS"
                  category="AR/VR/XR"
                />
                </div>
                <div onClick={this.componentSelector(6)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Three JS"
                  category="AR/VR/XR"
                />
                </div>                                

                    </div>
                    { this.projectToShow() } 
                </div>

            </div>
        )
    }
}

