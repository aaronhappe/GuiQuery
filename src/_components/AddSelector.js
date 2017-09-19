import React, { Component } from 'react';
import $ from "jquery";
import InternObj from "_components/InternObj";

class AddSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedSelector: false,
      selInputVal: ''
    };
    this.addSelClicked = this.addSelClicked.bind(this);
    this.resetSelector = this.resetSelector.bind(this);
    this.handleSelChange = this.handleSelChange.bind(this);
  }
  addSelClicked(props) { 
    this.setState({
      addedSelector: true
    });
    this.props.reviewFunc(this.state.selInputVal);
    var example = InternObj.returnCssSel(this.state.selInputVal);

  }
  confirmSelector(){

  }
  resetSelector(){
    this.setState({
      addedSelector: false
    });
    this.setState({
      selInputVal: ''
    })
    InternObj.resetReview(this.state.selInputVal)
  }
  handleSelChange(event) {
    this.setState({selInputVal: event.target.value});
      
  }
  returnButton() {
    if (!this.state.addedSelector) {
      return (
      	<div>
			    <p>Add CSS Selector</p>
			    <input id="selectorInput" placeholder="ex: .lp div > a" value={this.state.selInputVal} onChange={this.handleSelChange}/>
			    <span className="add" onClick={this.addSelClicked}>Add</span>
      	</div>
      )
    } else {
       return (
        <div className="reviewBool">
          <span className="add">Good to go?</span>
          <span className="add" onClick={this.resetSelector}>No no, that's not right.</span>
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