import React from 'react'
import style from './Title.module.css'
export default function Title({scdTxt, primTxt, dark, upper}) {
  return (
    <div className={`dflex alignBoth flexcolumn ` + (upper?" "+style.uppercase+" " : "") + (dark ? " "+style.darkTxt+" ": "")}>
        <div className={style.scdHeading}>{scdTxt}</div>
        <div className={style.primHeading}>{primTxt}</div>
        {dark ? 
        <div className={style.underline+ " " + style.dark}></div> :
        <div className={style.underline+ " " + style.mb60}></div>
        }
    </div>
  )
}
