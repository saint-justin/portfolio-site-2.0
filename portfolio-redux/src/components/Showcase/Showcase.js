import React, {Component} from 'react';

class Showcase extends Component {
  // Takes in an array of image sources and returns them out as a set of JSX objects
  addItems(imageSet){
    let jsxArr = [];
    imageSet.map(x => jsxArr.push(<img src={x} alt="Gallery Screenshot" className="showcase--image" key={x}></img>))
    return <>{jsxArr}</>
  }

  render(){
    return(
      <div className="showcase--wrapper">
        <div className="showcase--content">
          <h3 className="showcase--title">
            Screenshot Showcase
          </h3>
          <div className="showcase--image-set">
            {this.addItems(this.props.images)}
          </div>
        </div>
      </div>
      )
  }
};



export default Showcase;