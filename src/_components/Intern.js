import React, { Component } from 'react';
import $ from "jquery";
import Header from "_components/Header";
import AddSelector from "_components/AddSelector";

class Intern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addSelClicked() {
    // var myInternObj = new InternObj();
    // console.log(myInternObj);
    this.hasAddedSelector = true;
  }

  render() {

    return (
      <div className="intern">
      	<Header />
          <div className="selectors input-section" onClick={this.addSelClicked}>
          { !this.hasAddedSelector
            <AddSelector />
          }
          </div>
      </div>
    );
  }
}

export default Intern;
