import React, {Component} from 'react'

//Importing page content
import pageContent from "./homepage_content";

//Importing components
import LinkBox from '../../components/LinkBox'
import Card from '../../components/Card'
import StickyHeader from '../../components/StickyHeader'

//Importing SVG's
import WebIcon from '../../assets/icon-laptop.svg'
import GameIcon from '../../assets/icon-gamepad.svg'

//Importing Images
import BannerIbm from '../../assets/images/ibm_logo.jpg'
import BannerDino from '../../assets/images/dino-land-banner.png'
import BannerPokedex from '../../assets/images/pokedex-banner.png'
import BannerPitch from '../../assets/images/pitch-banner.png'

// Importing icons
import IconReact from '../../assets/icons/react_icon.png'
import IconSass from '../../assets/icons/sass_icon.png'
import IconGit from '../../assets/icons/git_icon.png'
import IconHtml from '../../assets/icons/html_icon.png'
import IconJs from '../../assets/icons/js_icon.png'
import IconCss from '../../assets/icons/css_icon.png'
import IconJquery from '../../assets/icons/jquery_icon.png'

let stickyNavNames = ['Web Work', 'Game Dev', 'Resume', 'Contact'];
let stickyNavLinks = ['/', '/', '/', '/']

class HomePage extends Component {
  render(){
    return(
      <>
        <div className="top--row">
          <div className="top--name">
            <div className="top--name-internal">
              <h1>Justin Vaughn</h1>
              <h2>Multidisciplinary <span>Developer</span></h2>
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
            <Card 
              src={BannerIbm} 
              alt="IBM Logo"
              titleText={pageContent.ibm.title}
              bodyText={pageContent.ibm.content}
              icons={[IconReact, IconSass, IconGit]}
              iconAlts={["ReactJS", "SASS", "GIT"]}
              link={pageContent.ibm.link}
              repo={pageContent.ibm.repo}
              />
            <Card 
              src={BannerDino} 
              alt="Dino Land"
              titleText={pageContent.dino.title}
              bodyText={pageContent.dino.content}
              icons={[IconJs, IconCss, IconHtml]}
              iconAlts={["JS ES6", "CSS3", "HTML5"]}
              link={pageContent.dino.link}
              repo={pageContent.dino.repo}
              />
            <Card 
              src={BannerPokedex} 
              alt="Web App Pokedex"
              titleText={pageContent.pokedex.title}
              bodyText={pageContent.pokedex.content}
              icons={[IconJquery, IconJs, IconHtml]}
              iconAlts={["jQuery", "JS ES6", "HTML5"]}
              link={pageContent.pokedex.link}
              repo={pageContent.pokedex.repo}
              />
            <Card 
              src={BannerPitch} 
              alt="IBM Logo"
              titleText={pageContent.pitch.title}
              bodyText={pageContent.pitch.content}
              icons={[IconCss, IconHtml]}
              iconAlts={["CSS3", "HTML5"]}
              link={pageContent.pitch.link}
              repo={pageContent.pitch.repo}
              />
          </div>
        </div>
      </>
    )
  }
};

export default HomePage;