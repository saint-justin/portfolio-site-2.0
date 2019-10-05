import React, {Component} from 'react';

class StickyHeader extends Component {
  // Returns a JSX component that contains <h3> and <a> tags filled in with the info passed in props
  addStickyNavItems(itemNameArr, itemLinkArr){
    let componentList = [];
    for(let i=0; i<itemNameArr.length; i++){
      componentList.push(<h3 key={"h3_" + itemNameArr[i]}><a href={itemLinkArr[i]} key={"a_" + itemNameArr[i]}> {itemNameArr[i]}</a></h3>);
    }

    return <>{componentList}</>;
  }

  // TODO: Fix the sticky attackment on the sticky header. Currently non-functional.
  // Makes the element sticky if the distance from the top of the element to the top of the page is greater than zero
  /*checkSticky(){
    console.log("moving");
    if (window.pageYOffset >= this.pageYOffset){
      this.classList.add("sticky");
     } else {
       this.classList.remove("sticky");
     }
  }*/

  // Constructor to set up the basic state for the component
  constructor(props){
    super(props);
    
    // Attach sticky functionality to the window
    //swindow.onscroll = function(){this.checkSticky()};

    // Set up this item's state
    this.state = { navItems: this.addStickyNavItems(this.props.itemNames, this.props.itemLinks) }
  }

  render(){
    return(
      <div className="nav--wrapper" id="sticky-nav" ref="stickyNav">
        <nav className="bx--row nav--main">
          {this.state.navItems}
        </nav>
      </div>
      )
  }
};



export default StickyHeader;