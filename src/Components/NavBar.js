import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { ReactComponent as Logo } from '../Assets/logo.svg'



const NavBar = ({ clickHandler }) => {
    return (
        <div className= "container">
            <div className="logoContainer">
                <div onClick={clickHandler} >
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

export default NavBar;