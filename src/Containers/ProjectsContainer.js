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
                Title = "Captain's Log"
                Description = "Captain’s log was my final group project in the 13-week coding bootcamp futureproof. This project was the culmination of all the skills I learned on this course.
                The app itself is an all-in-one management suite for football captains and managers. Once a user creates an account they can add new players to their squad, build teams using drag and drop, write detailed match reports and share them via pdf or our in-built mail functionality."
                Link = "https://github.com/atheermusa/captains-log"
                />
                ;
                case 2:
                    return <Project 
                    Title = "Apple a Day"
                    Description = "Apple a Day is a habit tracking app. Once logged in the user can add new habits to track and set a frequency at which they want to complete that habit. Users will then sign in and click the “Complete Habit” button and will add to their streak in doing so. Failure to complete a habit on time will cause the streak to reset."
                    Link = "https://github.com/atheermusa/LAP-3-App"
                    />
                    ;
                    case 3:
                      return <Project 
                      Title = "Good Vibes Only"
                      Description = "Good Vibes Only (GVO) was the first group project on the coding bootcamp (futureproof) I completed. GVO sought to bring some positivity to an increasingly isolated society. Users can anonymously share text posts along with an accompanying GIF of their choosing, these posts range from positive messages, celebration of achievements or just a funny observation! Other users can react to a post by clicking one of the reaction emojis or leaving a comment of their own. "
                      Link = "https://github.com/atheermusa/fp_lap_1_portfolio_week"
                      />
                      ;
                      case 4:
                        return <Project 
                        Title = "Quizolation"
                        Description = "Quizolation is a direct response to lockdowns imposed by the COVID-19 pandemic. Having already been stuck indoors for weeks, Quizolation offers a fresh alternative to the heavily-used and very argument prone board games stowed away in a cupboard. Using this application teams of up to four players can compete in a timed trivia game. Users can select from over 20 categories and will be able to set the number of questions per game. "
                        Link = "https://github.com/atheermusa/quizolation"
                        />
                        ;                   
            default:
               return  <Project 
               Title = "Captain's Log"
               Description = "Captain’s log was my final group project in the 13-week coding bootcamp futureproof. This project was the culmination of all the skills I learned on this course.
               The app itself is an all-in-one management suite for football captains and managers. Once a user creates an account they can add new players to their squad, build teams using drag and drop, write detailed match reports and share them via pdf or our in-built mail functionality."
               Link = "https://github.com/atheermusa/captains-log"
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
                  title="Captain's Log"
                  category="AR/VR/XR"
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
                  title="Good Vibes Only"
                  category="HTML5/CSS/Express"
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
                </div>                                

                    </div>
                    { this.projectToShow() } 
                </div>

            </div>
        )
    }
}

