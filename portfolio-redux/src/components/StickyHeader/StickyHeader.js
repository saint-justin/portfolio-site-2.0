import React, {Component} from 'react';

class StickyHeader extends Component {
  // Constructor to set up the basic state for the component
  constructor(props){
    super(props);

    // Set up this item's state
    this.state = { navItems: this.addStickyNavItems(this.props.itemNames, this.props.itemLinks) }
  }
  
  // Returns a JSX component that contains <h3> and <a> tags filled in with the info passed in props
  addStickyNavItems(itemNameArr, itemLinkArr){
    let componentList = [];
    for(let i=0; i<itemNameArr.length; i++){
      componentList.push(<h3><a href={itemLinkArr[i]}> {itemNameArr[i]}</a></h3>);
    }
    return <>{componentList}</>;
  }


  render(){
    return(
      <div className="nav--wrapper" id="sticky-nav">
        <nav className="bx--row nav--main">
          {this.state.navItems}
        </nav>
      </div>
      )
  }
};



export default StickyHeader;