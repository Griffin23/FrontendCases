$(function() {
	$.fn.extend({
		/**
		 * param: opt = {scrollLineCount: '', speed: '', interval: ''};
		 * 默认 scrollLineCount: 整屏行数，speed：500，interval：3000
		 */
		Scroll: function(opt, callback) {
			if (!opt) {
				opt = {};
			}
			var firstUl = this.find('ul:first');
			var liHeight = firstUl.find('li:first').height(),
				scrollLineCount = (opt.scrollLineCount)? parseInt(opt.scrollLineCount): parseInt(this.height() / liHeight),
				speed = (opt.speed)? parseInt(opt.speed): 500, // 滚动所需时间，毫秒（数值越大，滚动速度越慢）
				interval = (opt.interval)? parseInt(opt.interval): 3000; // 触发滚动时间间隔，毫秒
			if (scrollLineCount == 0) {
				scrollLineCount = 1;
			}
			var that = this;
			// 滚动函数
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
			// 鼠标经过
			var intervalID;
			firstUl.hover(function() {
				clearInterval(intervalID)
			}, function() {
				intervalID = setInterval('scrollUp()', interval);
			}).mouseout();
		}
	});
});