import React from 'react';



class StickyHeader extends React.Component{
	headerLink(){ 
		return "sticky-header--link" ;
	};


  render(props){
    return(   
      <>
      	<header className="sticky-header bx--row"> 
					<div className="sticky-header--container bx--col-lg-16 bx--col-md-6 bx--col-sm-16">
						<a hr ef="#web-dev" className={this.headerLink()}>Web Dev</a>
						<a href="#game-dev" className={this.headerLink()}>Game Dev</a>
						<a href="https://github.com/saint-justin" className={this.headerLink()}>GitHub</a>
						<a href="http://jvaughn.org/media/jvaughn_resume.pdf" className={this.headerLink()}>Resume</a>
						<a href="#contact" className={this.headerLink()}>Contact</a>
					</div>
				</header>
      </> 
    )
  }
}

export default StickyHeader;