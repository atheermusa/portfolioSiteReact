import React, { Component } from 'react'
import "../styles/projectimagecontainer.css"

export default class ProjectImageContainer extends Component {



    state = {
        currentImgSrc : `${this.props.imgsrc[0]}`,
        imgIdx: 0,
        currentImgDesc : `${this.props.imgdescription[0]}`,
    }

    // need to make the function async so that it auto updates
    // need to add hide buttons when reach min/max using an else 
    imagesSwitchPlus = async () => {

        if (this.state.imgIdx < this.props.imgsrc.length - 1)
            await this.setState(prevState => ({
                imgIdx: ++prevState.imgIdx
            }))
            this.setState({
            currentImgSrc : this.props.imgsrc[this.state.imgIdx],
            currentImgDesc : this.props.imgdescription[this.state.imgIdx]   
        }) 
    }

    imagesSwitchMinus = async () => {

        if (this.state.imgIdx > 0) {
            await this.setState(prevState => ({
                imgIdx: --prevState.imgIdx
            }))
            this.setState({
                currentImgSrc : this.props.imgsrc[this.state.imgIdx],
                currentImgDesc : this.props.imgdescription[this.state.imgIdx]   
            })}
    }
    render() {
        return (
            <div id="project-img-container">
                <img src={this.state.currentImgSrc} id="project-img" alt="this is a screenshot of the selected project"></img>
                <div id="project-img-text-container">
                    <p id="project-img-counter">{this.state.imgIdx + 1}/{this.props.imgsrc.length}</p>
                    <p id="project-img-decription">{this.state.currentImgDesc}</p>
                </div>
                <div id="previous-img"className="image-switcher-button" onClick={this.imagesSwitchMinus}>{'<'}</div>
                <div id="next-img" className="image-switcher-button" onClick={this.imagesSwitchPlus}>{'>'}</div>
            </div>
        )
    }
}
