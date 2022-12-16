$('[name="phone"]').mask('+7 (999) 999-99-99');

$("body").on("click", ".btn-scroll-top", function (e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
});

$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});