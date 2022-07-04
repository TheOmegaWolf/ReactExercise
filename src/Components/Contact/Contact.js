import React, { useState, useEffect, useContext } from 'react'
import Button from '../Button/Button';
import { ThemeContext } from '../Context/ThemeContext';
import Title from '../Title/Title';
import style from "./Contact.module.css"
export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const inputStyle = style.inputBox + " " + style.mb30;
  const inputStyleBig = inputStyle + " " + style.big;

  useEffect(() => {
    const {toggleClass, string} = props;
        var temp = string;
        temp=" Contact";
        toggleClass(temp, "Add")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => {
      const {toggleClass} = props;
      toggleClass("Contact", "Delete")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const value = useContext(ThemeContext)
  return (
    <div className={`${style.ContactContainer} dflex alignBoth ${value.theme!==''?style[value.theme]:style['light']}`} id="Contact">
        <div className='dflex flexcolumn alignBoth'>
            <Title scdTxt={"get in touch"} primTxt={"Contact"} upper={true} />
            <input type="text" placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)} className={inputStyle + " " + style.input} defaultValue={"Name"}/> 
            <input type="text" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} className={inputStyle + " " + style.textarea} defaultValue={"Email"}/> 
            <textarea type="text" placeholder='Message' value={message} onChange={(event)=>setMessage(event.target.value)} className={inputStyleBig} defaultValue={"Message"}/> 
            <Button text={"SEND MESSAGE"} smlTpBtm={true} />
        </div>
    </div>
  )
}
