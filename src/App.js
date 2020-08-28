import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar, Title, NotFound404, About, Projects, Articles,  } from './Components';
import './styles/app.css';

class App extends Component {
  state = {
   setDarkMode: false
  };
  
  darkModeToggle = () => this.setState(prevState => ({setDarkMode: !prevState.setDarkMode}));

  render(){

    return (
      <div className= {this.state.setDarkMode ? "dark-mode" : "light-mode"}>
        <header>
          <NavBar clickHandler={this.darkModeToggle}/>
          {/* <Title /> */}
        </header>

        <main>

          <section>
            <Switch>
              
              <Route exact path="/" component={Title} />

              <Route path="/about" component={About} />

              <Route path="/projects" component={Projects} />

              <Route path="/articles" component={Articles} />

              <Route component={NotFound404} />
            </Switch>
          </section>

          {/* <About />
          <Projects />
          <Articles /> */}
          
        </main>
      </div>
    );
  }
}

export default App;