import React, { Component } from 'react';
import $ from "jquery";
import Header from "_components/Header";
import AddSelector from "_components/AddSelector";
import AddLinks from "_components/AddLinks";
import Review from "_components/Review";

class Intern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromAddSel: 'd af',
      dataFromAddLinks: '',
    };
    this.passToReview = this.passToReview.bind(this);
    this.passToSelLinks = this.passToSelLinks.bind(this);
    console.log(this.state.dataFromAddSel);
  }

  passToReview(dataFrom){ 
    console.log(dataFrom);
    this.setState({
      dataFromAddSel: dataFrom
    });
  }
  passToSelLinks(dataFrom){
    console.log("asdffff");
    console.log(dataFrom);
    this.setState({
      dataFromAddLinks: dataFrom
    });
  }
  render() {

    return (
      <div className="intern">
      	<Header />
        <AddSelector reviewFunc={this.passToReview}/>
        <AddLinks linkFunc={this.passToSelLinks} propTwo={this.state.dataFromAddSel}/>
        <Review dataFrom={this.state.dataFrom}/>
      </div>
    )
  }
}

export default Intern;
