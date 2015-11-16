$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop()>350) {
			$("#nav-bar").fadeOut();
		} else {
			$("#nav-bar").fadeIn();
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>350) {
			$("#first-date").css("visibility", "visible").animate({opacity: 1.0}, 500);
			$("#young_text").css("visibility", "visible").animate({opacity: 1.0}, 500);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>600) {
			$("#photo-carousel").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>1250) {
			$("#wedding_text").css('visibility', 'visible').animate({opacity: 1.0}, 500);
			$("#wedding_img").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>1600) {
			$("#junior_img").css('visibility', 'visible').animate({opacity: 1.0}, 500);
			$("#junior_text").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>2081) {
			$("#photo-carousel-junior").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>2260) {
			$("#future").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	
});