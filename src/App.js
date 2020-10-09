import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar, Title, NotFound404, About, Articles, Footer } from './Components';
import { ProjectsContainer } from './Containers'
import './styles/app.css';

class App extends Component {
  state = {
   setDarkMode: false
  };
  
  darkModeToggle = () => this.setState(prevState => ({setDarkMode: !prevState.setDarkMode}));

  render(){

    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


    return (
      <div className= {this.state.setDarkMode ? "dark-mode" : "light-mode"} id="site-container">
        <header>
          <NavBar clickHandler={this.darkModeToggle}/>
          {/* <Title /> */}
        </header>

        <main>

          <section>
            <Switch>
              
              <Route exact path="/" component={Title} />

              <Route path="/about" component={About} />

              <Route path="/projects" component={ProjectsContainer} />

              <Route path="/articles" component={Articles} />

              <Route component={NotFound404} />
            </Switch>
          </section>

          
        </main>
        <div id= "footer-container">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;