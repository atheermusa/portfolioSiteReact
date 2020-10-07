import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { ReactComponent as Logo } from '../Assets/logo.svg'

export default class NavBar extends Component {

    state = {
        logoClass: "shake"
    }

    mouseEnterHandler = (e) => {
        setTimeout(() => this.setState({logoClass: ""}), 0);
    };

    mouseLeaveHandler = (e) => {
        setTimeout(() => this.setState({logoClass: "shake"}), 0);
    };
    render() {
        return (
            <div className= "container">
                <div className="logoContainer">
                    <div onClick={this.props.clickHandler} className={this.state.logoClass} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
                        <Logo />
                    </div>
                    <Link to="/" className="logoName">
                    <p>Atheer Musa</p>
                    </Link>
                </div>
                <nav className="nav">
                    <NavLink className="navlink" activeClassName="current" to="/" href="about">Home</NavLink>
                    <NavLink className="navlink" activeClassName="current" to="/about" href="about">About</NavLink>
                    <NavLink className="navlink" activeClassName="current" to="/projects" href="projects">Projects</NavLink>
                    <NavLink className="navlink" activeClassName="current" to="/articles">Articles</NavLink>
                </nav>
            </div>
        );
    }
}



// const bulbLogo = document.getElementById("logo")

// const state = {
//     logoClass: "shake"
// }

// const hoverHandler = (e) => {
//     state.logoClass.setS
  
//   // -> triggering reflow /* The actual magic */
//   // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
//   // Oops! This won't work in strict mode. Thanks Felis Phasma!
//   // element.offsetWidth = element.offsetWidth;
//   // Do this instead:
//   void bulbLogo.offsetWidth;
  
//   // -> and re-adding the class
//   bulbLogo.classList.add("shake");
// };

// const NavBar = ({ clickHandler }) => {
    
//     return (
//         <div className= "container">
//             <div className="logoContainer">
//                 <div onClick={clickHandler} id="logo" className={state.logoClass} onMouseEnter={hoverHandler}>
//                     <Logo />
//                 </div>
//                 <Link to="/" className="logoName">
//                 <p>Atheer Musa</p>
//                 </Link>
//             </div>
//             <nav className="nav">
//                 <NavLink className="navlink" activeClassName="current" to="/" href="about">Home</NavLink>
//                 <NavLink className="navlink" activeClassName="current" to="/about" href="about">About</NavLink>
//                 <NavLink className="navlink" activeClassName="current" to="/projects" href="projects">Projects</NavLink>
//                 <NavLink className="navlink" activeClassName="current" to="/articles">Articles</NavLink>
//             </nav>
//         </div>
//     );
// }

// export default NavBar;