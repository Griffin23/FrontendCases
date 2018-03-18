$(function() {	
	var carouselUl = $('.carousel-ul');
	var translateXpx = 0;
	var ulWidth = carouselUl.width();
	var liWidth = $('.carousel-list').width();
	var interval = 1000;
    var intervalID = setInterval(changeImg, interval);
	
	function changeImg(liIndex) {
		if (liIndex >=0) {
			translateXpx = 0 - liIndex * liWidth;
		} else {
			translateXpx -= liWidth;
			if (0 - translateXpx > ulWidth - liWidth) {
				translateXpx = 0;
			}
			liIndex = 0 - translateXpx / liWidth;
		}
		$('.carousel-button').find('span:eq(' + liIndex + ')').addClass('this-carousel-span')
                .siblings().removeClass('this-carousel-span');
        carouselUl.css('transform', 'translateX(' + translateXpx + 'px)');
	}
	
	$('.carousel-status').on('click', function() {
		$('#carousel-play').toggle();
		$('#carousel-pause').toggle();
		if ($('#carousel-pause').css('display') == 'none') {
			intervalID = setInterval(changeImg, interval);
		} else {
			clearInterval(intervalID);
		}
	});
	
	$('.carousel-button span').on('click', function() {
		$(this).addClass('this-carousel-span').siblings().removeClass('this-carousel-span');
		var liIndex = $(this).index();
		changeImg(liIndex);
	});
});