import React from 'react'
import style from "./Avatar.module.css"

export default function ({img}) {
  return (
    <>
        <img src={(img)} width={"250px"} height={"250px"} className={style.imageContainer} alt="DisplayPic"/>
    </>
  )
}
