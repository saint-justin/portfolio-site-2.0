import React, {Component} from 'react'
import LinkBox from '../../components/LinkBox'
import DefaultIcon from '../../assets/icon-question-circle.svg'
import WebIcon from '../../assets/icon-laptop.svg'
import GameIcon from '../../assets/icon-gamepad.svg'
import StickyHeader from '../../components/StickyHeader'

let stickyNavNames = ['Web Work', 'Game Dev', 'Resume', 'Contact'];
let stickyNavLinks = ['/', '/', '/', '/']

class HomePage extends Component {
  render(){
    return(
      <>
        <div className="top--row">
          <div className="top--name">
            <div className="top--name-internal">
              <h1>
                Justin Vaughn
              </h1>
              <h2>
                Multidisciplinary <span>Developer</span>
              </h2>
            </div>
          </div>
          <div className="top--navs">
            <nav className="side-nav">
              <LinkBox icon={WebIcon} boxText="Web Dev" bgColor="#58A4B0" link="https://google.com/" transColor="#588CB0"/>
              <LinkBox icon={GameIcon} boxText="Game Dev" bgColor="#FD9562" link="https://google.com/" transColor="#FDAC62"/>
            </nav>
          </div>
        </div>
        <StickyHeader itemNames={stickyNavNames} itemLinks={stickyNavLinks}/>
      </>
    )
  }
};

export default HomePage;