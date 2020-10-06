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