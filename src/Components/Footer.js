import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div>
                © 2020 Atheer Musa, Inc
                </div>
                <nav className="nav">
                    <a target="none" className="navlink" href="https://twitter.com/atheermusa">Twitter</a>
                    <a target="none" className="navlink" href="https://www.linkedin.com/in/atheer-musa-66158258">Linkedin</a>
                    <a target="none" className="navlink" href="https://github.com/atheermusa">Github</a>
                </nav>
            </div>
        )
    }
}
