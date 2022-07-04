import React, {useContext}  from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import style from "./Image.module.css"
export default function Image(props) {
  const value = useContext(ThemeContext)
  return (
    <div className={`imgContainer ${value.theme!==''?style[value.theme]:style['light']}`}>
        <div className={style.empty}>
        </div>
    </div>
  )
}
