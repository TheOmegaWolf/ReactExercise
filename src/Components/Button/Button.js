import React, {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import style from './Button.module.css'

export default function Button({text, mr, white, smlTpBtm}) {
  const value = useContext(ThemeContext)
  const theme = (value.theme!==''?style[value.theme]:style['light'])
  return (
    <button className={style.btn+ (mr? " " + style.btnMr + " ":"") + (white? " " + style.white +" ": "") + (smlTpBtm ? " "+ style.smlTpBtm + " " : "") + ` ${theme}`}> {text} </button>
  )
}
