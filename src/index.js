import React from 'react';
import ReactDOM from 'react-dom';
import Intern from './_components/Intern';

// function InternClass(initArr) {
//   var initLinkSel = initArr.shift(),
//   pageHTML = 'cat',
//   reviewSelector = $('.review-selector-2'),
//   userLinks = initArr.shift(),
//   userLink = '';

//   $(initLinkSel).each(function() {
//     userLink = userLinks.shift();
//     $(this).attr('href', userLink);
//   });
//   pageHTML = $('.lp').html();
//   $(pageHTML).appendTo(reviewSelector);
// };

	// InternObj.prototype.bar = function () {
	// 	console.log('asdf OK??????');
	// }

// myInternClass.bar();

ReactDOM.render(<Intern />, document.getElementById('intern'));