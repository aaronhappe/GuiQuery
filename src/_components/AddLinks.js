import React, { Component } from 'react';
import $ from "jquery";
import InternObj from "_components/InternObj";

class AddLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selInputVal: ''
    };
  }

  returnButton(props) {
   console.log(this.props);
    if (this.props.propTwo === true) {
      return (
      	<div>
			    <p>Add Links to change</p>
			    <input id="selectorInput" placeholder="ex: http://www.links" value={this.state.selInputVal} onChange={this.handleSelChange}/>
			    <span className="add" onClick={this.addSelClicked}>Bad</span>
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

export default AddLinks;