import React, { Component } from 'react';
import $ from "jquery";
import InternObj from "_components/InternObj";

class AddLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkInputVal: ''
    };
  this.addLinksClicked = this.addLinksClicked.bind(this);
      this.handleLinkChange = this.handleLinkChange.bind(this);

  }
  addLinksClicked(props) { 
    
    console.log('asdf');
  }
  handleLinkChange(event) {
    this.setState({linkInputVal: event.target.value});
      
  }
  returnButton(props) {
    if (this.props.showLinks === true) {
      return (
      	<div>
			    <p>Add Links to change</p>
			    <input id="selectorInput" value={this.state.linkInputVal}  onChange={this.handleLinkChange}/>
			    <span className="add" onClick={this.addLinksClicked}>Baddd</span>
      	</div>
      )
    } 
  }

  render() {
	  return (
		  <div className="input-section">
				{this.returnButton()}
        {this.state.linkInputVal}
			</div>
	  )
  }

}

export default AddLinks;