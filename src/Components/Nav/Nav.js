import style from './Nav.module.css'
import React, { Component } from 'react'
import { Link } from 'react-scroll';
import { ThemeConsumer } from '../Context/ThemeContext';
export default class Nav extends Component {
  state = {
    links: {
      "Home": true,
      "Projects": false,
      "About": false,
      "Contact": false
    }
  }
  constructor(props) {
    super(props)
    this.changeActive = this.changeActive.bind(this)
  }
  changeActive = (activelink) => {
    //   console.log('hi')
    const { links } = this.state;
    let newLinks = {};
    Object.keys(links).map((link) => {
      if (link === activelink) {
        newLinks[activelink] = true;
      }
      else {
        newLinks[link] = false;
      }
      return newLinks;
    })
    this.setState({ links: newLinks })
    this.props.setLinks(newLinks);
  }
  render() {
    const { links } = this.state
    const {active, linkItem} = style;
    const activeLink  = linkItem+" "+active;
    console.log(style)
    return (
      <ThemeConsumer>
        {value =>  (
        <div className={`${style.navCntr} ${value.theme!==''?style[value.theme]:style['light']}`}>
          <div className={`dflex ${style.navInrCntr}`}>
            <div className={`flexgrow dflex ${style.logo}`}>
              <span className={`flexshrink`}>
                SJ.
              </span>
              <span>
                <label class={`${style.switch}`}>
                  <input type="checkbox" onChange={() => value.toggleTheme()}/>
                  <span class={`${style.slider} ${style.round}`}></span>
                </label>
              </span>
            </div>
            <div className={'flexshrink dflex'}>
              {Object.keys(links).map((link) => {
                return (
                  <Link activeClass={links[link] === true ? active : ""} to={link} spy={true} smooth={true}><div className={links[link] === true ? activeLink : linkItem} onClick={() => this.changeActive(link)}>{link}</div></Link>
                )
              })}
            </div>
          </div>
        </div>
        )
        }
      </ThemeConsumer>
    )
  }
}

