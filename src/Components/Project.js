import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.Title} </h1>
                <p> {this.props.Description} </p>
            </div>
        )
    }
}
