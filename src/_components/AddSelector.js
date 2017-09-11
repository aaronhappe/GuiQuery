import React, { Component } from 'react';
import $ from "jquery";
import InternObj from "_components/InternObj";

class AddSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
	  return (

			  	<div>
				    <p>Add CSS Selector</p>
				    <input id="selectorInput" placeholder="#myId .myClass p" />
				    <span className="add">Add</span>
				</div>

	  )
  }

}

export default AddSelector;