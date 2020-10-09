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
                imgsrc = {["https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230807/Screenshot_2020-10-09_at_08.53.03-min_bqe76t.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230802/Screenshot_2020-10-09_at_08.53.19-min_hclsn3.png","https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230501/Screenshot_2020-10-09_at_08.53.53_f0etha.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230502/Screenshot_2020-10-09_at_08.54.17_weuzmj.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230503/Screenshot_2020-10-09_at_08.55.05_dilp5q.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230504/Screenshot_2020-10-09_at_08.56.16_wkhccm.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230502/Screenshot_2020-10-09_at_08.56.31_iss9zf.png"]}
                imgdescription = {["screenshot showing login/registration page", "screenshot showing dashboard that greets user upn logging in", "screenshot showing form to add new players to the squad", "screenshot displaying a populated player list", "screenshot demonstrating drag and drop team builder", "screenshot showing match report functionality along with pdf download and mail functionality", "screenshot of match report pdf"]}
                />
                ;
                case 2:
                    return <Project 
                    Title = "Apple a Day"
                    Description = "Apple a Day is a habit tracking app. Once logged in the user can add new habits to track and set a frequency at which they want to complete that habit. Users will then sign in and click the “Complete Habit” button and will add to their streak in doing so. Failure to complete a habit on time will cause the streak to reset."
                    Link = "https://github.com/atheermusa/LAP-3-App"
                    imgsrc = {["https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230490/Screenshot_2020-10-09_at_08.42.24_eaf40z.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230490/Screenshot_2020-10-09_at_08.42.53_nthm1c.png","https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230493/Screenshot_2020-10-09_at_08.43.53_utn6py.png","https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230491/Screenshot_2020-10-09_at_08.43.04_y0emsk.png"]}
                      imgdescription = {["screenshot showing login/registration page", "screenshot of dashboard", "New habit form", "user profile page"]}
                    />
                    ;
                    case 3:
                      return <Project 
                      Title = "Good Vibes"
                      Description = "Good Vibes (GV) was the first group project on the coding bootcamp (futureproof) I completed. GV sought to bring some positivity to an increasingly isolated society. Users can anonymously share text posts along with an accompanying GIF of their choosing, these posts range from positive messages, celebration of achievements or just a funny observation! Other users can react to a post by clicking one of the reaction emojis or leaving a comment of their own. "
                      Link = "https://github.com/atheermusa/fp_lap_1_portfolio_week"
                      imgsrc = {["https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602191101/Screenshot_2020-10-08_at_22.04.48_n6gh9j.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602191197/Screenshot_2020-10-08_at_22.06.24_srjvj4.png","https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602197593/Screenshot_2020-10-08_at_21.21.12_kidl0e.png"]}
                      imgdescription = {["screenshot showing logo styling, new post form and gif functionality", "screenshot showing a test post with a gif attatched, how it looks when a user reacts with an emoji and what the comment section looks like", "the test post made prior to the demonstration at the end of the project week"]}
                      />
                      ;
                      case 4:
                        return <Project 
                        Title = "Quizolation"
                        Description = "Quizolation is a direct response to lockdowns imposed by the COVID-19 pandemic. Having already been stuck indoors for weeks, Quizolation offers a fresh alternative to the heavily-used and very argument prone board games stowed away in a cupboard. Using this application teams of up to four players can compete in a timed trivia game. Users can select from over 20 categories and will be able to set the number of questions per game. "
                        Link = "https://github.com/atheermusa/quizolation"
                        imgsrc = {["https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602197791/image_nurjrz.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602232031/Screenshot_2020-10-09_at_09.26.11_ybqtg0.png","https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602232031/Screenshot_2020-10-09_at_09.26.24_xxu7lf.png","https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602232031/Screenshot_2020-10-09_at_09.26.39_jki1l9.png"]}
                        imgdescription = {["Quizolation landing page", "screenshot showing game setup form", "screenshot of question and answer selection page", "Game results page"]}
                        />
                        ;                   
            default:
               return  <Project 
               Title = "Captain's Log"
               Description = "Captain’s log was my final group project in the 13-week coding bootcamp futureproof. This project was the culmination of all the skills I learned on this course.
               The app itself is an all-in-one management suite for football captains and managers. Once a user creates an account they can add new players to their squad, build teams using drag and drop, write detailed match reports and share them via pdf or our in-built mail functionality."
               Link = "https://github.com/atheermusa/captains-log"
               imgsrc = {["https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230807/Screenshot_2020-10-09_at_08.53.03-min_bqe76t.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230802/Screenshot_2020-10-09_at_08.53.19-min_hclsn3.png","https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230501/Screenshot_2020-10-09_at_08.53.53_f0etha.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230502/Screenshot_2020-10-09_at_08.54.17_weuzmj.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230503/Screenshot_2020-10-09_at_08.55.05_dilp5q.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230504/Screenshot_2020-10-09_at_08.56.16_wkhccm.png", "https://res.cloudinary.com/dl4pcxjxz/image/upload/v1602230502/Screenshot_2020-10-09_at_08.56.31_iss9zf.png"]}
               imgdescription = {["screenshot showing login/registration page", "screenshot showing dashboard that greets user upn logging in", "screenshot showing form to add new players to the squad", "screenshot displaying a populated player list", "screenshot demonstrating drag and drop team builder", "screenshot showing match report functionality along with pdf download and mail functionality", "screenshot of match report pdf"]}
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
                  title="Good Vibes"
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

