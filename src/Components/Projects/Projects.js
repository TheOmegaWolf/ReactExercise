import React from 'react'
import "./Projects.css"
import Image from '../Image/Image'
import Button from '../Button/Button'
export default function Projects() {
  return (
      <div className='projectsContainer dflex alignBoth flexcolumn'  id={"Projects"}>
          <div className={"ProjectsScdHeading"}>Projects</div>
          <div className={"ProjectsPrimHeading"}>React</div>
          <div className={"underline mb60"}></div>
          <div className={"dflex flGap"}>
              <Image empty={true} />
              <Image empty={true} />
              <Image empty={true} />
          </div>
          <Button text={"MORE"} white={true} />
      </div>
  )
}
