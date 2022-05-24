import React from 'react'
import './Hero.css'
import Image from '../Image/Image'
import img from "../../Images/Image.png"
import Button from '../Button/Button'
export default function Hero() {
  return (
    <div className='dflex alignVertical HeroContainer' id={"Home"}>
        <div className='imgGap'>
            <Image img={img} alt="DisplayPic" />
        </div>
        <div>
            <div className='Heading'> Scarlett Johansson</div>
            <div className='Heading two'> Frontend Developer</div>
            <div className='content'>I implement user interface design and solve user problems with HTML, CSS and Javascript. I have 2 years of making products that solve user problems and Implementing responsive websites.</div>
            <Button text={"My Resume"}/>
        </div>
    </div>
  )
}
