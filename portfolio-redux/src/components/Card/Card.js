import React, {Component} from 'react';
//import { ReactComponent as Icon } from "../../assets/arrow-right-solid.svg";
import SVG from 'react-inlinesvg';

// Pull the built path from the pre-built path then pass that into the SVG component
import arrowPath from "../../assets/arrow-right.svg";
import gitPath from "../../assets/icon-github.svg";

class Card extends Component {

  constructor(props){
    super(props);

    // Set up icons in the state
    this.state = { icons: this.addIcons(this.props.icons, this.props.iconAlts) }
  }


  // Takes in lists of icons and their alt tags, turns them into JSX, and returns it all out as a single element
  addIcons(iconsArr, iconAlts){
    let iconJSX = [];
    for(let i=0; i<iconsArr.length; i++){
      iconJSX.push(
      <div className="card--footer-icon-wrapper">
        <img src={iconsArr[i]} alt={iconAlts[i]}></img>
        <h5>{iconAlts[i]}</h5>
      </div>)
    }
    return <>{iconJSX}</>;
  }

  render(){
    return(
      <article className="card--wrapper">
        <div className="card--body">
          <img className="card--image" src={this.props.src} alt={this.props.alt}></img>
          <h4 className="card--title-text">{this.props.titleText}</h4>
          <p className="card--body-text">{this.props.bodyText}</p>
        </div>
        <div className="card--footer">
          <div className="card--footer-icons">
            {this.state.icons}
          </div>
          <div className="card--footer-link">
            <a href={this.props.link} className="card--footer-idividual"><img src={arrowPath} alt="" fill="#FFF"/></a>
            <a href={this.props.repo} className="card--footer-idividual"><img className="card--body-git" src={gitPath} alt="GitHub Link"/></a>
          </div>
        </div>
      </article>
      )
  }
};

export default Card;