import style from './App.module.css';
import './flex.css'
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import About from "./Components/About/About"
import Contact from './Components/Contact/Contact';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './Components/Context/ThemeContext';
function App() {
  const [links, setLinks] = useState({
    "Home": true,
    "Projects": false,
    "About": false,
    "Contact": false
  })
  
 const [theme, setTheme] = useState("")
  function toggleTheme(){
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  
  useEffect(() => {
    toggleTheme()
  // eslint-disable-next-line
  }, [])
  const [currCls, setCurrCls] = useState("");
  var elem = "Home";
  const toggleClass = (name, type) =>{
    if(type==="Add")
    {
      console.log("name:",name, "added")
      setCurrCls(name);
    }
    else{
      console.log(name, type)
      setCurrCls("")
    }
  }
  Object.keys(links).map((link)=> {
    if(links[link]){
      elem = (link === "Home") ? "Hero" : link;  
      return link;
    }
    return link;
  })
  return (
    <ThemeProvider value={{theme, toggleTheme}}>
      <div className={`${style.Container}${currCls}`}>
        <Nav setLinks={setLinks} toggleTheme={toggleTheme}/>
        {elem === "Hero" ? <Hero toggleClass={toggleClass} string={currCls} name={"Home"} toggleTheme={toggleTheme}/> : <></>}
        {elem === "Projects" ? <Projects toggleClass={toggleClass} string={currCls} name={"Projects"}/> : <></>}
        {elem === "About" ? <About toggleClass={toggleClass} string={currCls} name={"About"}/> : <></>}
        {elem === "Contact" ? <Contact toggleClass={toggleClass} string={currCls} name={"Contact"}/> : <></>}
      </div>
    </ThemeProvider>
  );
}

export default App;

