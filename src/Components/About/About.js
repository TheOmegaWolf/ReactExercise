import React, { useEffect, useState } from 'react'
import './About.css'
import Image from '../Image/Image'
import img from "../../Images/Image.png"
import Button from '../Button/Button'

export default function About() {
  const [skills, setSkills] = useState([]);
  useEffect(()=>{
      setSkills(["HTML", "CSS", "Javascript", "Bootstrap", "Php", "Python", "C++", "Wordpress"])
  },[])
  return (
     <div class="dflex flexcolumn alignBoth AboutCntr"  id={"About"}>
        <div className={"AboutHdr dflex alignBoth flexcolumn"}>
            <div className='aboutScdHdrTxt'>Who am i</div>
            <div className='aboutPrimHdrTxt'>About</div>
            <div className='underline dark'></div>
        </div>
        <div className='dflex HeroContainer'>
            <div className='imgGap'>
                <Image img={img} />
            </div>
            <div>
                <div className='content noTopSpace'>I implement user interface design and solve user problems with HTML, CSS and Javascript. I have 2 years of making products that solve user problems and Implementing responsive websites.</div>
                <div className='skillsHdg'>Skills</div>
                <div className='dflex'>
                    {skills.map((skill)=>(<Button text={skill.toUpperCase()} mr={true} />))}
                </div>
            </div>
        </div>
     </div>
  )
}
