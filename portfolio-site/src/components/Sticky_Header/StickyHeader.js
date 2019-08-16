import React from 'react';



class StickyHeader extends React.Component{
	headerClass(){
		return "bx--col-lg-2";
	}

  render(props){
    return(   
      <>
      	<header className="sticky-header bx--row"> 
					<ul>
						<a src="#web-dev" className={this.headerClass()}><li>Web Dev</li></a>
						<a src="#game-dev" className={this.headerClass()}><li>Game Dev</li></a>
						<a src="https://github.com/saint-justin" className={this.headerClass()}><li>GitHub</li></a>
						<a src="http://jvaughn.org/media/jvaughn_resume.pdf" className={this.headerClass()}><li>Resume</li></a>
						<a src="#contact" className={this.headerClass()}><li>Contact</li></a>
					</ul>
				</header>
      </> 
    )
  }
}

export default StickyHeader;