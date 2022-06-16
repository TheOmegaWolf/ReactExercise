import React, { useEffect, useState } from 'react'
import style from './About.module.css'
import img from "../../Images/Image.png"
import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import Title from '../Title/Title'

export default function About(props) {
  const [skills, setSkills] = useState([]);
  useEffect(()=>{
      setSkills(["HTML", "CSS", "Javascript", "Bootstrap", "Php", "Python", "C++", "Wordpress"])
      const {toggleClass, string} = props;
          var temp = string;
          temp=" About";
          toggleClass(temp, "Add")
  },[])

  useEffect(() => {
    return () => {
      const {toggleClass} = props;
      toggleClass("Contact", "Delete")
    }
  },[])
  
  return (
     <div className={`dflex flexcolumn alignBoth ${style.AboutCntr}`}  id={"About"}>
        <div className={`${style.AboutHdr} dflex alignBoth flexcolumn`}>
            <Title scdTxt = {"Who am i"} primTxt={"About"} dark={true} upper={true}/>
        </div>
        <div className={`dflex ${style.AboutMainContainer}`}>
            <div className={style.imgGap}>
                <Avatar img={img} />
            </div>
            <div>
                <div className={style.content}>I implement user interface design and solve user problems with HTML, CSS and Javascript. I have 2 years of making products that solve user problems and Implementing responsive websites.</div>
                <div className={style.skillsHdg}>Skills</div>
                <div className='dflex'>
                    {skills.map((skill)=>(<Button text={skill.toUpperCase()} mr={true} />))}
                </div>
            </div>
        </div>
     </div>
  )
}
