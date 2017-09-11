import $ from "jquery";

	var InternObj =  {
		returnCssSel : function(initArr){
		  var initLinkSel = initArr.shift(),
		  pageHTML = '',
		  reviewSelector = $('.review-selector-2'),
		  userLinks = initArr.shift(),
		  userLink = '';

		  $(initLinkSel).each(function() {
		    userLink = userLinks.shift();
		    $(this).attr('href', userLink);
		  });

		  pageHTML = $('.lp-to-edit').html();

		  $(pageHTML).appendTo(reviewSelector);
		  return 'returning for test';
		}
	}

	module.exports = InternObj;