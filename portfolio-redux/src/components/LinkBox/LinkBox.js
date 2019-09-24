import React, {Component} from 'react';



class LinkBox extends Component {
  
  render(){
    return(
      <a className="linkbox--wrapper" style={{backgroundColor: this.props.bgColor}} href={this.props.link}>
        <img src={this.props.icon} alt="Icon" className="linkbox--icon"></img>
        <h3 className="linkbox--text"> 
          {this.props.boxText}
        </h3>
      </a>
      )
  }
};



export default LinkBox;