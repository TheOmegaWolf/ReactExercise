import React, { useState } from 'react'
import Button from '../Button/Button';
import "./Contact.css"
export default function Contact() {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [message, setMessage] = useState("Message");
  return (
    <div className='ContactContainer dflex alignBoth' id="Contact">
        <div className='dflex flexcolumn alignBoth'>
            <div className='ContactScdTxt'>GET IN TOUCH</div>
            <div className='ContactPrimTxt'>CONTACT</div>
            <div className='underline mb60'></div>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} className='inputBox mb30' defaultValue={"Name"}/> 
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} className='inputBox mb30' defaultValue={"Email"}/> 
            <textarea type="text" value={message} onChange={(event)=>setMessage(event.target.value)} className='inputBox big mb30' defaultValue={"Message"}/> 
            <Button text={"SEND MESSAGE"} smlTpBtm={true} />
        </div>
    </div>
  )
}
