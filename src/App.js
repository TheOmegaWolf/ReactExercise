import style from './App.module.css';
import './flex.css'
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import About from "./Components/About/About"
import Contact from './Components/Contact/Contact';
import { useState } from 'react';
function App() {
  const [links, setLinks] = useState({
    "Home": true,
    "Projects": false,
    "About": false,
    "Contact": false
  })
  var elem = "Home"; 
  Object.keys(links).map((link)=> {
    if(links[link]){
      elem = (link === "Home") ? "Hero" : link;  
      return link;
    }
    return link;
  })
  return (
    <div className={style.Container}>
      <Nav setLinks={setLinks}/>
      {elem === "Hero" ? <Hero /> : <></>}
      {elem === "Projects" ? <Projects /> : <></>}
      {elem === "About" ? <About/> : <></>}
      {elem === "Contact" ? <Contact/> : <></>}
    </div>
  );
}

export default App;
