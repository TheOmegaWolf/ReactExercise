import style from './App.module.css';
import './flex.css'
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import About from "./Components/About/About"
import Contact from './Components/Contact/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className={style.Container}>
        <Nav/>
        <Routes>
          <Route path={"/"} element={<Hero/>}></Route>
          <Route path={"/Home"} element={<Hero/>}></Route>
          <Route path={"/Projects"} element={<Projects/>}></Route>
          <Route path={"/About"} element={<About/>}></Route>
          <Route path={"/Contact"} element={<Contact/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
