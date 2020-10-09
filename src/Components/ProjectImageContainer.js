import React, { Component } from 'react'
import "../styles/projectimagecontainer.css"

export default class ProjectImageContainer extends Component {

    state = {
        imgsrc : this.props.imgsrc,
        currentImgSrc : `${this.props.imgsrc[0]}`,
        imgIdx: 0,
        currentImgDesc : `${this.props.imgdescription[0]}`,
        isNewProject : true
    }
    imagesSwitchPlus = async () => {
            await this.setState({
                isNewProject : false
            })
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

static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.imgsrc !== nextProps.imgsrc) {
      return {
        imgsrc : nextProps.imgsrc,
        isNewProject : true,
        imgIdx: 0
        }
      };
    }
    render() {
        return (
            <div id="project-img-container">
                <img src={ this.state.isNewProject ? this.props.imgsrc[0] : this.state.currentImgSrc} id="project-img" alt="this is a screenshot of the selected project"></img>
                <div id="project-img-text-container">
                    <p id="project-img-counter">{this.state.imgIdx + 1}/{this.props.imgsrc.length}</p>
                    <p id="project-img-decription">{ this.state.isNewProject ? this.props.imgdescription[0] : this.state.currentImgDesc}</p>
                </div>
                <div id="previous-img"className="image-switcher-button" onClick={this.imagesSwitchMinus}>{'<'}</div>
                <div id="next-img" className="image-switcher-button" onClick={this.imagesSwitchPlus}>{'>'}</div>
            </div>
        )
    }
}
