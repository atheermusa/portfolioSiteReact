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
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nulla sed lacus dictum luctus vel non nibh. Donec mollis fermentum lacus, a egestas augue tristique in. Fusce condimentum et diam at ullamcorper. Etiam at congue nunc. Etiam quis vestibulum erat. Integer ut urna mollis, hendrerit risus id, dictum tellus. Nunc eros metus, consequat in vehicula eu, sollicitudin in orci. Nullam interdum venenatis leo, ac ultrices libero hendrerit imperdiet. Aenean lacinia orci sed dignissim luctus. Aliquam eu ligula orci. Integer iaculis, augue in vehicula tempor, mi massa luctus odio, consectetur malesuada dui ligula eu sapien."
                />
                ;
                case 2:
                    return <Project 
                    Title = "Apple a Day"
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nulla sed lacus dictum luctus vel non nibh. Donec mollis fermentum lacus, a egestas augue tristique in. Fusce condimentum et diam at ullamcorper. Etiam at congue nunc. Etiam quis vestibulum erat. Integer ut urna mollis, hendrerit risus id, dictum tellus. Nunc eros metus, consequat in vehicula eu, sollicitudin in orci. Nullam interdum venenatis leo, ac ultrices libero hendrerit imperdiet. Aenean lacinia orci sed dignissim luctus. Aliquam eu ligula orci. Integer iaculis, augue in vehicula tempor, mi massa luctus odio, consectetur malesuada dui ligula eu sapien."
                    />
                    ;
                    case 3:
                      return <Project 
                      Title = "Captain's Log"
                      Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nulla sed lacus dictum luctus vel non nibh. Donec mollis fermentum lacus, a egestas augue tristique in. Fusce condimentum et diam at ullamcorper. Etiam at congue nunc. Etiam quis vestibulum erat. Integer ut urna mollis, hendrerit risus id, dictum tellus. Nunc eros metus, consequat in vehicula eu, sollicitudin in orci. Nullam interdum venenatis leo, ac ultrices libero hendrerit imperdiet. Aenean lacinia orci sed dignissim luctus. Aliquam eu ligula orci. Integer iaculis, augue in vehicula tempor, mi massa luctus odio, consectetur malesuada dui ligula eu sapien."
                      />
                      ;
                      case 4:
                        return <Project 
                        Title = "Quizolation"
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nulla sed lacus dictum luctus vel non nibh. Donec mollis fermentum lacus, a egestas augue tristique in. Fusce condimentum et diam at ullamcorper. Etiam at congue nunc. Etiam quis vestibulum erat. Integer ut urna mollis, hendrerit risus id, dictum tellus. Nunc eros metus, consequat in vehicula eu, sollicitudin in orci. Nullam interdum venenatis leo, ac ultrices libero hendrerit imperdiet. Aenean lacinia orci sed dignissim luctus. Aliquam eu ligula orci. Integer iaculis, augue in vehicula tempor, mi massa luctus odio, consectetur malesuada dui ligula eu sapien."
                        />
                        ;
                        case 5:
                          return <Project 
                          Title = "Project 5"
                          Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nulla sed lacus dictum luctus vel non nibh. Donec mollis fermentum lacus, a egestas augue tristique in. Fusce condimentum et diam at ullamcorper. Etiam at congue nunc. Etiam quis vestibulum erat. Integer ut urna mollis, hendrerit risus id, dictum tellus. Nunc eros metus, consequat in vehicula eu, sollicitudin in orci. Nullam interdum venenatis leo, ac ultrices libero hendrerit imperdiet. Aenean lacinia orci sed dignissim luctus. Aliquam eu ligula orci. Integer iaculis, augue in vehicula tempor, mi massa luctus odio, consectetur malesuada dui ligula eu sapien."
                          />
                          ;
                          case 6:
                            return <Project 
                            Title = "Project 6"
                            Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nulla sed lacus dictum luctus vel non nibh. Donec mollis fermentum lacus, a egestas augue tristique in. Fusce condimentum et diam at ullamcorper. Etiam at congue nunc. Etiam quis vestibulum erat. Integer ut urna mollis, hendrerit risus id, dictum tellus. Nunc eros metus, consequat in vehicula eu, sollicitudin in orci. Nullam interdum venenatis leo, ac ultrices libero hendrerit imperdiet. Aenean lacinia orci sed dignissim luctus. Aliquam eu ligula orci. Integer iaculis, augue in vehicula tempor, mi massa luctus odio, consectetur malesuada dui ligula eu sapien."
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
          <div className="thumbnailContainer">
          <div onClick={this.componentSelector(1)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Good Vibes Only"
                  category="HTML5/CSS/Express"
                />
                </div>
                <div onClick={this.componentSelector(2)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Apple a Day"
                  category="PERN"
                />
                </div>
                <div onClick={this.componentSelector(3)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Captain's Log"
                  category="AR/VR/XR"
                />
                </div>
                <div onClick={this.componentSelector(4)}>
           <Thumbnail
                  link="/ThreeJS"
                  image="ig"
                  title="Quizolation"
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

