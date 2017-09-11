import React, { Component } from 'react';
import $ from "jquery";
import Header from "_components/Header";
import AddSelector from "_components/AddSelector";

class Intern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addSelClicked = this.addSelClicked.bind(this);
  }

  addSelClicked() { 
    // this.setState({
    //   addedSelector: true
    // });
    alert('ugh');
  }
  returnButton() {
    if (!this.state.addedSelector) {
      return <AddSelector onClick={this.addSelClicked}/>
    } 
  }

  render() {
    return (
      <div className="intern">
      	<Header />
        <AddSelector />
      </div>
    )
  }
}

export default Intern;
