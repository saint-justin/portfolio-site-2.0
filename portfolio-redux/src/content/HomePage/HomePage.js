import React, {Component} from 'react'

//Importing page content
import pageContent from './homepage_content'

//Importing components
import LinkBox from '../../components/LinkBox'
import Card from '../../components/Card'
import StickyHeader from '../../components/StickyHeader'
import Showcase from '../../components/Showcase'
import Contact from '../../components/Contact'

//Importing SVG's
import WebIcon from '../../assets/icon-laptop.svg'
import GameIcon from '../../assets/icon-gamepad.svg'

//Importing Images
import BannerIbm from '../../assets/images/ibm_logo.jpg'
import BannerDino from '../../assets/images/dino-land-banner.png'
import BannerPokedex from '../../assets/images/pokedex-banner.png'
import BannerPitch from '../../assets/images/pitch-banner.png'

import BannerDeluge from '../../assets/images/deluge-banner.png'
import BannerEgg from '../../assets/images/egg-banner.png'
import BannerAsteroids from '../../assets/images/asteroids-banner.png'
import BannerTech from '../../assets/images/tech_banner.png'

import Portrait from '../../assets/icons/portrait.png'

import Gallery_01 from '../../assets/images/gallery/gal_01.png'
import Gallery_02 from '../../assets/images/gallery/gal_02.png'
import Gallery_03 from '../../assets/images/gallery/gal_03.png'
import Gallery_04 from '../../assets/images/gallery/gal_04.png'
import Gallery_05 from '../../assets/images/gallery/gal_05.png'
import Gallery_06 from '../../assets/images/gallery/gal_06.png'
import Gallery_07 from '../../assets/images/gallery/gal_07.jpg'
import Gallery_08 from '../../assets/images/gallery/gal_08.png'
import Gallery_09 from '../../assets/images/gallery/gal_09.png'
import Gallery_10 from '../../assets/images/gallery/gal_10.png'
import Gallery_11 from '../../assets/images/gallery/gal_11.png'
import Gallery_12 from '../../assets/images/gallery/gal_12.jpg'

// Importing icons
import IconReact from '../../assets/icons/react_icon.png'
import IconSass from '../../assets/icons/sass_icon.png'
import IconGitA from '../../assets/icons/gitb_icon.png'
import IconHtml from '../../assets/icons/html_icon.png'
import IconJs from '../../assets/icons/js_icon.png'
import IconCss from '../../assets/icons/css_icon.png'
import IconJquery from '../../assets/icons/jquery_icon.png'

import IconCSharp from '../../assets/icons/csharp_icon.png'
import IconAgile from '../../assets/icons/agile_icon.png'
import IconUnreal from '../../assets/icons/ue4_icon.png'
import IconUnity from '../../assets/icons/unity_icon.png'
import IconGitB from '../../assets/icons/gito_icon.png'
import IconMono from '../../assets/icons/mono_icon.png'

let stickyNavNames = ['Web Work', 'Game Dev', 'Resume', 'Contact', 'GitHub'];
let stickyNavLinks = ['#web', '#game', './src/assets/justin-vaughn-resume.pdf', '#contact', 'https://github.com/saint-justin']

class HomePage extends Component {
  render(){
    return(
      <>
        {/* ------------------------ ABOVE THE FOLD ROW ------------------------ */}
        <div className="top--row">
          <div className="top--name">
            <div className="top--name-internal">
              <h1>Justin Vaughn</h1>
              <h2>Multidisciplinary <span>Developer</span></h2>
            </div>
          </div>
          <div className="top--navs">
            <nav className="side-nav">
              <LinkBox icon={WebIcon} boxText="Web Dev" bgColor="#58A4B0" link="#web" transColor="#588CB0"/>
              <LinkBox icon={GameIcon} boxText="Game Dev" bgColor="#FD9562" link="#game" transColor="#FDAC62"/>
            </nav>
          </div>
        </div>

        {/* ------------------------ STICKY NAV ROW ------------------------ */}
        <StickyHeader itemNames={stickyNavNames} itemLinks={stickyNavLinks}/>
        
        {/* ------------------------ WEB DEV CARD ROW ------------------------ */}
        <div className="body--card-row">
          <h3 className="body--card-row-title" id="web">Web Dev</h3>
          <div className="body--card-row-cards">
            <Card 
              src={BannerIbm} 
              alt="IBM Logo"
              titleText={pageContent.ibm.title}
              bodyText={pageContent.ibm.content}
              icons={[IconReact, IconSass, IconGitA]}
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

        {/* ------------------------ GALLERY SECTION ------------------------ */}
        <Showcase images={[Gallery_01, Gallery_02, Gallery_03, Gallery_04, Gallery_05, Gallery_06, 
                           Gallery_07, Gallery_08, Gallery_09, Gallery_10, Gallery_11, Gallery_12]}/>

        {/* ------------------------ GAME DEV CARD ROW ------------------------ */}
        <div className="body--card-row">
          <h3 className="body--card-row-title" id="game">Game Dev</h3>
          <div className="body--card-row-cards">
            <Card 
              src={BannerDeluge} 
              alt="Deluge Concept Art"
              titleText={pageContent.deluge.title}
              bodyText={pageContent.deluge.content}
              icons={[IconCSharp, IconUnity, IconGitB]}
              iconAlts={["C#", "Unity", "GIT"]}
              link={pageContent.deluge.link}
              repo={pageContent.deluge.repo}
              />
            <Card 
              src={BannerEgg} 
              alt="Egg Titlecard"
              titleText={pageContent.egg.title}
              bodyText={pageContent.egg.content}
              icons={[IconCSharp, IconMono, IconAgile]}
              iconAlts={["C#", "MonoGame", "Agile"]}
              link={pageContent.egg.link}
              repo={pageContent.egg.repo}
              />
            <Card 
              src={BannerAsteroids} 
              alt="Asteroids Screenshot"
              titleText={pageContent.asteroids.title}
              bodyText={pageContent.asteroids.content}
              icons={[IconCSharp, IconUnity, IconGitB]}
              iconAlts={["C#", "Unity", "GIT"]}
              link={pageContent.asteroids.link}
              repo={pageContent.asteroids.repo}
              />
            <Card 
              src={BannerTech} 
              alt="Tech Work"
              titleText={pageContent.tech.title}
              bodyText={pageContent.tech.content}
              icons={[IconUnreal, IconAgile, IconGitB]}
              iconAlts={["UE4", "Agile", "GIT"]}
              link={pageContent.tech.link}
              repo={pageContent.tech.repo}
              />
          </div>
        </div>
        <div className="footer--row">
          <Contact img={Portrait}/>
        </div>
      </>
    )
  }
};

export default HomePage;