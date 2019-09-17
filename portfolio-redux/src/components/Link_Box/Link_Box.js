import React, {Component} from 'react';
import default_icon from '../../assets/icon-question-circle.svg';

class Link_Box extends Component {
  render(){
    const boxText = "default";
    const icon = {default_icon};

    return(
      <>
        {this.props.icon}
        <h3> 
          {this.props.boxText}
        </h3>
      </>
      )
  }


};

export default Link_Box;