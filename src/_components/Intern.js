import React, { Component } from 'react';
import $ from "jquery";
import Header from "_components/Header";
import AddSelector from "_components/AddSelector";
import Review from "_components/Review";

class Intern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFrom: '',
    };
    this.passToReview = this.passToReview.bind(this);
  }

  passToReview(dataFrom){ 
    var self = this;
    console.log(this);
    this.setState({
      dataFrom: dataFrom
    });
  }

  render() {
    return (
      <div className="intern">
      	<Header />
        <AddSelector reviewFunc={this.passToReview}/>
        <Review dataFrom={this.state.dataFrom}/>
      </div>
    )
  }
}

export default Intern;
