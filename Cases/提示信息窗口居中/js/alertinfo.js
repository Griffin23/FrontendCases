$(function () {
	$('#show-alertinfo-btn').click(function () {
		var boxObj = $('#alertinfo-container');
		var maskObj = $('#alertinfo-mask');
		showAlertinfoAndMask(boxObj, maskObj);
	});
	
	$('#close-alertinfo-container').click(function () {
		var boxObj = $('#alertinfo-container');
		var maskObj = $('#alertinfo-mask');
		hideAlertinfoAndMask(boxObj, maskObj);
	});
	
	function showAlertinfoAndMask(boxObj, maskObj) {
		var thisWindow = $(window),
			windowScrollTop = thisWindow.scrollTop(),
			windowHeight = thisWindow.height(),
			windowWidth = thisWindow.width(),
			loginBoxHeight = boxObj.height(),
			loginBoxWidth = boxObj.width(),
			thisDocumentHeight = $('body').height();
			
		var thisMaskHeight = thisDocumentHeight > windowHeight ? thisDocumentHeight : windowHeight;
		maskObj.css('height', thisMaskHeight);
		maskObj.show().animate({
			'opacity': 0.6
		}, 200, function () {
			boxObj.css({
				'top': windowScrollTop + (windowHeight - loginBoxHeight) / 2,
				'left': (windowWidth - loginBoxWidth) / 2
			}).fadeIn(100);
		});
	}
	
	function hideAlertinfoAndMask(boxObj, maskObj) {
		boxObj.fadeOut(100, function () {
			maskObj.fadeOut(100, function () {
				$(this).css('opacity', 0);
			});
        });
	}
})
