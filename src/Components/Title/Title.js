import React, {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import style from './Title.module.css'
export default function Title({scdTxt, primTxt, dark, upper}) {
  const value = useContext(ThemeContext)
  return (
    <div className={`dflex alignBoth flexcolumn ` + (upper?" "+style.uppercase+" " : "") + (dark ? " "+style.darkTxt+" ": "") + ` ${value.theme!==''?style[value.theme]:style['light']}`}>
        <div className={style.scdHeading}>{scdTxt}</div>
        <div className={style.primHeading}>{primTxt}</div>
        {dark ? 
        <div className={style.underline+ " " + style.dark}></div> :
        <div className={style.underline+ " " + style.mb60}></div>
        }
    </div>
  )
}
