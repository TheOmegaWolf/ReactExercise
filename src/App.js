import './App.css';
import './flex.css'
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import About from "./Components/About/About"
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="Container">
      <Nav />
      <Hero />
      <Projects/>
      <About />
      <Contact/>
    </div>
  );
}

export default App;
