import style from './Nav.module.css'
import React, { Component } from 'react'
import { Link } from 'react-scroll';
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
    console.log(activelink)
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
  }
  render() {
    const { links } = this.state
    console.log(links)
    const {active, linkItem} = style;
    const activeLink  = linkItem+" "+active
    return (
      <div className={style.navCntr}>
        <div className={`dflex ${style.navInrCntr}`}>
          <div className={`flexgrow ${style.logo}`}>
            SJ.
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
}

