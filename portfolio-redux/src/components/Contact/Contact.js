import React, {Component} from 'react';

class Contact extends Component {
  render(){
    return(
      <div className="contact--wrapper">
        <div className="contact--info">
          <h3 className="footer-title" id="contact">Justin Vaughn</h3>
          <h3 className="footer-title">jtv6445@rit.edu</h3>
        </div>
        <div className="contact--blurb">
          <p>	Justin Vaughn is a 3rd year Game Design & Development - Business Management double major student at the Rochester Institute of Technology. <br></br><br></br>
            He's a designer, programmer, developer, and all around neato guy. He prefers couch-coop games that don't take themselves too seriously follow closely by whatever other games he can afford. He's probably played too much League to be considered healthy. </p>
        </div>
        <div className="contact--portrait"> 
          <img src={this.props.img} alt="Self Portrait"></img>
        </div>
      </div>
      )
  }
};



export default Contact;