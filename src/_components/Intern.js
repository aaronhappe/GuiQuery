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
      dataFromAddSel: '',
      showLinksModule: false,
    };
    this.passToReview = this.passToReview.bind(this);
    this.passToAddLinks = this.passToAddLinks.bind(this);
  }

  passToReview(dataFrom){ 
    this.setState({
      dataFromAddSel: dataFrom
    });
  }
  passToAddLinks(dataFrom, numSelected){
    console.log(numSelected);
    this.setState({
      showLinksModule: dataFrom
    }); 
  }
  render() {

    return (
      <div className="intern">
      cache: a lalala
      	<Header />
        <AddSelector passToReviewFunc={this.passToReview} passToAddLinksFunc={this.passToAddLinks}/>
        <AddLinks showLinks={this.state.showLinksModule}/>
        <Review dataFrom={this.state.dataFromAddSel}/>
      </div>
    )
  }
}

export default Intern;
