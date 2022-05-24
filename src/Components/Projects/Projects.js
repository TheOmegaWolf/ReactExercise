import React from 'react'
import style from "./Projects.module.css"
import Image from '../Image/Image'
import Button from '../Button/Button'
import Title from '../Title/Title'
export default function Projects() {
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
