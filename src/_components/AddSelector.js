import React, { Component } from 'react';
import $ from "jquery";
import InternObj from "_components/InternObj";

class AddSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addedSelector: false};
    this.addSelClicked = this.addSelClicked.bind(this);
  }
  addSelClicked() { 
    this.setState({
      addedSelector: true
    });
    alert('hehe');
  }
  returnButton() {
    if (!this.state.addedSelector) {
      return (
      	<div>
			    <p>Add CSS Selector</p>
			    <input id="selectorInput" placeholder="#myId .myClass p" />
			    <span className="add" onClick={this.addSelClicked}>Add</span>
      	</div>
      )
    } 
  }

  render() {
	  return (
			  <div className="input-section">
					{this.returnButton()}
				</div>
	  )
  }

}

export default AddSelector;