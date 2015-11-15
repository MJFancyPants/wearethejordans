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
			$("#first-date").slideDown();
			$("#young_text").slideDown();
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>600) {
			$("#photo-carousel").fadeIn();
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>1304) {
			$("#wedding_text").slideDown();
			$("#wedding_img").slideDown();
		}
	});

	// $(window).scroll(function() {
	// 	if ($(this).scrollTop()>1600) {
	// 		$("#junior_img").slideDown();
	// 		$("#junior_text").slideDown();
	// 	}
	// });

	// $(window).scroll(function() {
	// 	if ($(this).scrollTop()>2081) {
	// 		$("#photo-carousel-junior").fadeIn();
	// 	}
	// });

	// $(window).scroll(function() {
	// 	if ($(this).scrollTop()>2260) {
	// 		$("#future").fadeIn();
	// 	}
	// });

	
});