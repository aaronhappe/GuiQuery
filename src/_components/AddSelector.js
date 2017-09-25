import React, { Component } from 'react';
import $ from "jquery";
import InternObj from "_components/InternObj";

class AddSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedSelector: false,
      showAddLinks: false,
      selInputVal: ''
    };
    this.addSelClicked = this.addSelClicked.bind(this);
    this.resetSelector = this.resetSelector.bind(this);
    this.confirmSelector = this.confirmSelector.bind(this);
    this.handleSelChange = this.handleSelChange.bind(this);
  }
  addSelClicked(props) { 
    this.setState({
      addedSelector: true
    });
    this.props.passToReviewFunc(this.state.selInputVal);
    var example = InternObj.returnCssSel(this.state.selInputVal);

  }
  confirmSelector(props){
    var numLinksSelected = InternObj.numLinksSelected(this.state.selInputVal);
    this.setState({
      addedSelector: true
    });

    this.setState({
      showAddLinks: true
    });
    // check into this
    // this.setState({
    //   selInputVal: true
    // });
    // check into this
    this.props.passToAddLinksFunc(true, numLinksSelected);
    InternObj.resetReview(this.state.selInputVal);

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
    } else if(!this.state.showAddLinks){
       return (
        <div className="reviewBool">
          <span className="addd" onClick={this.confirmSelector}>GTG</span>
          <span className="add" onClick={this.resetSelector}>Nope</span>
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