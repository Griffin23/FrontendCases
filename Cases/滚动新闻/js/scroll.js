$(function() {
	$.fn.extend({
		/**
		 * param: opt = {scrollLineCount: '', speed: '', interval: ''};
		 * Ĭ�� scrollLineCount: ����������speed��500��interval��3000
		 */
		Scroll: function(opt, callback) {
			if (!opt) {
				opt = {};
			}
			var firstUl = this.find('ul:first');
			var liHeight = firstUl.find('li:first').height(),
				scrollLineCount = (opt.scrollLineCount)? parseInt(opt.scrollLineCount): parseInt(this.height() / liHeight),
				speed = (opt.speed)? parseInt(opt.speed): 500, // ��������ʱ�䣬���루��ֵԽ�󣬹����ٶ�Խ����
				interval = (opt.interval)? parseInt(opt.interval): 3000; // ��������ʱ����������
			if (scrollLineCount == 0) {
				scrollLineCount = 1;
			}
			var that = this;
			// ��������
			scrollUp = function() {
				firstUl.animate(
					//{ marginTop: 0 - that.height() },
					{ marginTop: 0 - scrollLineCount * liHeight },
					speed,
					function() {
						for (var i = 0; i < scrollLineCount; i++) {
							firstUl.find('li:first').appendTo(firstUl);
						}
						firstUl.css({marginTop: 0});
					}
				);
			};
			// ��꾭��
			var intervalID;
			firstUl.hover(function() {
				clearInterval(intervalID)
			}, function() {
				intervalID = setInterval('scrollUp()', interval);
			}).mouseout();
		}
	});
});