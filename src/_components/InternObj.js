import $ from "jquery";

var InternObj =  {
	returnCssSel : function(initSel){
	  // var initLinkSel = initArr.shift(),
	  $('.lp-to-edit ' + initSel).addClass('el-to-change');
	  // oldHrefs = [],
	  // userLinks = [];

	  // $(initLinkSel).each(function() {
	  //   oldHrefs.push($(this).attr('href'))
	  //   $(this).addClass('el-to-change');
	  // });
	  // console.log(initArr.length);
	  // console.log(oldHrefs.length);
	  // $(initArr).each(
	  // 	function(){
	  		
	  // 	}
	  // );

	  // return 'returning for test';
	},
	numLinksSelected : function(initSel){
		var numSelected = $('.el-to-change');
		return numSelected.length
	},
	numbLinksToReplace: function(){

	},
	resetReview : function(initSel){
		$(initSel).removeClass('el-to-change');
		$('.review-body').html('');
	}
}

module.exports = InternObj;