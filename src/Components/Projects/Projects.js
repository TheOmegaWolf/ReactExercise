import React, { Component } from 'react'
import style from "./Projects.module.css"
import Image from '../Image/Image'
import Button from '../Button/Button'
import Title from '../Title/Title'

export default class Projects extends Component {
    componentDidMount(){
        const {toggleClass, string} = this.props;
        var temp = string;
        temp=" Projects";
        toggleClass(temp, "Add")
      }
      componentWillUnmount(){
        const {toggleClass} = this.props;
        toggleClass("Projects", "Delete")
      }
  render() {
    return (
        <div className={`${style.projectsContainer} dflex alignBoth flexcolumn`}  id={"Projects"}>
            <Title scdTxt = {"Projects"} primTxt = {"React"} />
            <div className={`dflex ${style.flGap}`}>
                <Image empty={true} />
                <Image empty={true} />
                <Image empty={true} />
            </div>
            <Button text={"MORE"} white={true} />
        </div>
    )
  }
}

