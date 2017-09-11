	var InternObj = function (initArr) {
	  var initLinkSel = initArr.shift(),
	  pageHTML = '',
	  reviewSelector = $('.review-selector-2'),
	  userLinks = initArr.shift(),
	  userLink = '';

	  $(initLinkSel).each(function() {
	    userLink = userLinks.shift();
	    $(this).attr('href', userLink);
	  });
	  pageHTML = $('.lp').html();
	  $(pageHTML).appendTo(reviewSelector);
	}

	module.exports = InternObj;