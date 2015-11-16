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
		if ($(this).scrollTop()>1430) {
			$(".col6-text-1").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
			$(".col6-img-1").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>1762) {
			$(".col6-text-2").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
			$(".col6-img-2").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>2078) {
			$(".col6-text-3").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
			$(".col6-img-3").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>2365) {
			$(".col6-text-4").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
			$(".col6-img-4").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>2649) {
			$(".col6-text-5").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
			$(".col6-img-5").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>2649) {
			$("#bwmarried").css('visibility', 'visible').animate({opacity: 1.0}, 1000);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>3253) {
			$("#junior_img").css('visibility', 'visible').animate({opacity: 1.0}, 500);
			$("#junior_text").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>3780) {
			$("#photo-carousel-junior").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()>3781) {
			$("#future").css('visibility', 'visible').animate({opacity: 1.0}, 500);
		}
	});

	
});