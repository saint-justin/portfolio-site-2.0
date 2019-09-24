import React, {Component} from 'react'

//Importing components
import LinkBox from '../../components/LinkBox'
import Card from '../../components/Card'
import StickyHeader from '../../components/StickyHeader'

//Importing SVG's
import DefaultIcon from '../../assets/icon-question-circle.svg'
import WebIcon from '../../assets/icon-laptop.svg'
import GameIcon from '../../assets/icon-gamepad.svg'

//Importing Images
import IBMLogo from '../../assets/images/ibm_logo.jpg';
import IconReact from '../../assets/images/react_icon.png'
import IconSass from '../../assets/images/sass_icon.png'
import IconGit from '../../assets/images/git_icon.png'

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
        <div className="body--card-row">
          <h3 className="body--card-row-title" id="Web Dev">Web Dev</h3>
          <div className="body--card-row-cards">
            <Card src={IBMLogo} 
              alt="IBM Logo"
              titleText="AI Sol.'s Go to Market"
              bodyText="My internship at IBM working with four designers to build early designs for a future company offering. Pieces of the project are under NDA until market release."
              icons={[IconReact, IconSass, IconGit]}/>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </>
    )
  }
};

export default HomePage;