import React, { Component } from "react"
import '../styles/projects.css';
import Thumbnail from '../Components/Thumbnail.js';
import Project from '../Components/Project.js';


export default class ProjectsContainer extends Component {

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
                Title = "Good Vibes Only"
                Description = "This is a description for project one"
                />
                ;
                case 2:
                    return <Project 
                    Title = "Apple a Day"
                    Description = "This is a description for project 2"
                    />
                    ;
                    case 3:
                      return <Project 
                      Title = "Captain's Log"
                      Description = "This is a description for project 3"
                      />
                      ;
                      case 4:
                        return <Project 
                        Title = "Quizolation"
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
                  title="Good Vibes Only"
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

