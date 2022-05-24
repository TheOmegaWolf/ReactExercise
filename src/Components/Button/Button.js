import React from 'react'
import style from './Button.module.css'
export default function Button({text, mr, white, smlTpBtm}) {
  return (
    <button className={style.btn+ (mr? " " + style.btnMr + " ":"") + (white? " " + style.white +" ": "") + (smlTpBtm ? " "+ style.smlTpBtm + " " : "")}> {text} </button>
  )
}
