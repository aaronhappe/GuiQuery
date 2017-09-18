import React from 'react';

class Review extends React.Component {
	constructor(props) {
	  super(props);
	    this.state = {
	      data: '',
	    };
	}
	reviewBody() {
		return (
    	<div className="review-body">
    		<p>{this.props.dataFrom}</p>
    	</div>
		)
	}
	render() {
		return (
	  <div className="review-section">
	    	<h1>Review</h1>
	    	{this.reviewBody()}
	  </div>
		)
	}
}

export default Review;