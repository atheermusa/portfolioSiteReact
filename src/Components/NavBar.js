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
                    <NavLink className="navlink" activeClassName="current" to="/" href="about" >Home</NavLink>
                    <NavLink className="navlink" activeClassName="current" to="/about" href="about">About</NavLink>
                    <NavLink className="navlink" activeClassName="current" to="/projects" href="projects">Projects</NavLink>
                    <NavLink className="navlink" activeClassName="current" to="/articles">Articles</NavLink>
                </nav>
            </div>
        );
    }
}