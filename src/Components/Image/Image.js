import React from 'react'
import "./Image.css"
export default function Image(props) {
  const { img, empty } = props;
  return (
    <div className='imgContainer'>
        {!empty?
        <img src={(img)} width={"250px"} height={"250px"} className={'imageContainer'}/>
        :<div className={"empty"}>
        </div>}
    </div>
  )
}
