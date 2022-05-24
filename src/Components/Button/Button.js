import React from 'react'
import './Button.css'
export default function Button({text, mr, white, smlTpBtm}) {
  return (
    <button className={"btn"+ (mr?" btnMr ":"") + (white? " white " : "") + (smlTpBtm ? " smlTpBtm " : "")}> {text} </button>
  )
}
