
import React, { Component } from 'react'
import style from './Hero.module.css'
import img from "../../Images/Image.png"
import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import { ThemeConsumer } from '../Context/ThemeContext'

export default class Hero extends Component {
  componentDidMount(){
    const {toggleClass, string} = this.props;
    var temp = string;
    temp=" Home";
    toggleClass(temp, "Add")
  }
  componentWillUnmount(){
    const {toggleClass} = this.props;
    toggleClass("Home", "Delete")
  }
  render() {
    return (
      <ThemeConsumer>
        {value =>(
          <div className={`dflex alignVertical ${style.HeroContainer} ${value.theme!==''?style[value.theme]:style['light']}`} id={"Home"}>
            <div className={style.imgGap}>
                <Avatar img={img} />
            </div>
            <div>
                <div className={style.Heading}> Scarlett Johansson</div>
                <div className={`${style.Heading} ${style.two}`}> Frontend Developer</div>
                <div className={style.content}>I implement user interface design and solve user problems with HTML, CSS and Javascript. I have 2 years of making products that solve user problems and Implementing responsive websites.</div>
                <Button text={"My Resume"}/>
            </div>
          </div>
        )}
      </ThemeConsumer>
    )
  }
}
