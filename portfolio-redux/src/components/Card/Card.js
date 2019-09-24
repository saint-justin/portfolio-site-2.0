import React, {Component} from 'react';
//import { ReactComponent as Icon } from "../../assets/arrow-right-solid.svg";
import SVG from 'react-inlinesvg';

// Pull the built path from the pre-built path then pass that into the SVG component
import arrowPath from "../../assets/arrow-right-solid.svg";
const RightArrow = () => <SVG src={arrowPath} />;

class Card extends Component {
  render(){
    return(
      <article className="card--wrapper">
        <div className="card--body">
          <img className="card--image" src={this.props.src} alt={this.props.alt}></img>
          <h4 className="card--title-text">{this.props.titleText}</h4>
          <p className="card--body-text">{this.props.bodyText}</p>
        </div>
        <div className="card--footer">
          <div className="card--footer-icons"></div>
          <div className="card--footer-link">
            <RightArrow />
          </div>
        </div>
      </article>
      )
  }
};



export default Card;